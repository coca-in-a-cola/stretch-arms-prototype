"""SA-028d: three bounded reference-image requests; no credential material is persisted."""
import base64
import hashlib
import io
import json
import os
from pathlib import Path
import re
import subprocess
import tempfile
from PIL import Image

ROOT = Path(__file__).resolve().parents[2]
OUT = Path(__file__).resolve().parent
ENDPOINT = 'https://agy.mice.zone/v1/chat/completions'
MODEL = 'gemini-3.1-flash-image'
POSES = {
    'lean': 'Friendly forward lean, smiling and talking. Both empty cream-gloved hands extended to the right, one upper and one lower, separated by open air, presenting empty space.',
    'point': 'Friendly explaining pose, one empty cream-gloved hand pointing right with index finger, the other open palm below. Preserve the original head, clothes, proportions and silhouette.',
    'mad': 'Offended and irritated facial expression, lowered brows, beak scowling around the same cigar. Both cream-gloved hands empty, one raised and the other open to the right. Same rooster, not a new character.'
}

def sha(data):
    return hashlib.sha256(data).hexdigest()

for pose, direction in POSES.items():
    target = OUT / f'gen_herald_nopaper_{pose}.jpg'
    if target.exists():
        raise SystemExit(f'Refusing to repeat an existing request: {pose}')
    ref = ROOT / f'public/assets/gen_herald_{pose}.png'
    original = ref.read_bytes()
    image = Image.open(io.BytesIO(original)).convert('RGBA')
    white = Image.new('RGBA', image.size, 'white')
    white.alpha_composite(image)
    buf = io.BytesIO()
    white.convert('RGB').save(buf, format='PNG')
    reference = buf.getvalue()
    prompt = (
        'EDIT THE ATTACHED EXACT ORIGINAL CHARACTER, do not invent or substitute any character. '
        'This is a vintage 1930s rubberhose black rooster/crow town crier, NOT a medieval human herald. '
        'Keep precisely his black feather body and tail, large orange beak, red comb, battered charcoal bowler hat, '
        'teal waistcoat, red bow tie, cream gloves, short brown cigar and thick imperfect vintage ink contours. '
        'Keep original flat muted colors and subtle aged texture. Same three-quarter facing right upper-body composition. '
        'REMOVE THE ENTIRE PAPER SHEET. Redraw complete naturally shaped gloves and arms where the sheet used to be. '
        'The hands must be visibly empty with clean WHITE BACKGROUND visible between them. '
        'Absolutely NO paper, scroll, sign, rectangle, placard, writing, text, caption or extra props. '
        'Do not erase the character or simplify him to a generic mascot. '
        'Single isolated complete upper-body rooster including tail, hat and all fingers, generous blank margin on every side, '
        'on perfectly pure white background, no shadow or floor. Match the attached pose except for the empty hands. '
        + direction
    )
    payload = {'model': MODEL, 'size': '1024x1024', 'messages': [{'role': 'user', 'content': [
        {'type': 'text', 'text': prompt},
        {'type': 'image_url', 'image_url': {'url': 'data:image/png;base64,' + base64.b64encode(reference).decode()}}
    ]}]}
    with tempfile.TemporaryDirectory(prefix='sa028d-', dir=os.environ['TMPDIR']) as scratch:
        scratch = Path(scratch)
        request = scratch / 'request.json'
        response = scratch / 'response.json'
        request.write_text(json.dumps(payload))
        rfd, wfd = os.pipe()
        key = Path('/home/tyler/.config/opencode/secrets/antigravity-api-key').read_text().strip()
        os.write(wfd, ('Authorization: Bearer ' + key + '\nContent-Type: application/json\n').encode())
        os.close(wfd)
        del key
        result = subprocess.run(['curl', '--silent', '--show-error', '--max-time', '180',
            '-H', f'@/dev/fd/{rfd}', '--data-binary', '@' + str(request),
            '-o', str(response), '-w', '%{http_code}', ENDPOINT],
            pass_fds=(rfd,), capture_output=True, text=True)
        os.close(rfd)
        receipt = {'endpoint': ENDPOINT, 'requested_model': MODEL, 'http_status': result.stdout,
            'curl_exit': result.returncode, 'reference_path': str(ref.relative_to(ROOT)),
            'reference_sha256': sha(original), 'submitted_white_composite_sha256': sha(reference),
            'reference_dimensions': list(image.size), 'prompt': prompt}
        if result.returncode or result.stdout != '200':
            receipt['error'] = result.stderr[:500]
            if response.exists():
                receipt['provider_error'] = response.read_text()[:1000]
            (OUT / f'{pose}-receipt.json').write_text(json.dumps(receipt, indent=2))
            raise SystemExit(f'{pose}: generation failed HTTP={result.stdout} curl={result.returncode}; receipt saved')
        data = json.loads(response.read_text())
        content = data['choices'][0]['message']['content']
        match = re.search(r'data:image/(jpeg|png);base64,([A-Za-z0-9+/=]+)', content)
        if not match:
            raise SystemExit(f'{pose}: HTTP200 without supported image payload')
        raw = base64.b64decode(match[2], validate=True)
        generated = Image.open(io.BytesIO(raw))
        target = target.with_suffix('.jpg' if match[1] == 'jpeg' else '.png')
        target.write_bytes(raw)
        receipt.update({'response_model': data.get('model'), 'response_id': data.get('id'),
            'raw_path': str(target.relative_to(ROOT)), 'raw_sha256': sha(raw),
            'raw_dimensions': list(generated.size), 'raw_format': generated.format,
            'usage': data.get('usage'), 'visual_acceptance': 'PENDING: no native generated-image viewing tool exposed'})
        (OUT / f'{pose}-receipt.json').write_text(json.dumps(receipt, indent=2))
        print(f'{pose}: HTTP200 {generated.format} {generated.size} {target.relative_to(ROOT)}', flush=True)
