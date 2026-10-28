# SA-028 release receipt

Status: LIVE VERIFIED

## Immutable source and remote handles
- Built SHA: `641e0a880365a0b1d47940c05e977d50ca8581c7` (accepted dist; no implementation/build rerun).
- gh-pages: `f6525f3c238746b80b5614c999f6e36445d66afb`.
- Annotated tag: `sa-028-r13-contact-hands`, peeled to built SHA; no overwrite.
- Remote readback:
```
f6525f3c238746b80b5614c999f6e36445d66afb	refs/heads/gh-pages
641e0a880365a0b1d47940c05e977d50ca8581c7	refs/heads/prototype
771f26a32efedccd3e40a6a62cc2bc2611870b27	refs/tags/sa-028-r13-contact-hands
641e0a880365a0b1d47940c05e977d50ca8581c7	refs/tags/sa-028-r13-contact-hands^{}
```

## Live URLs and byte verification
- Root: https://coca-in-a-cola.github.io/stretch-arms-prototype/
- Immutable: https://coca-in-a-cola.github.io/stretch-arms-prototype/r13-contact-hands/
- Catalog: https://coca-in-a-cola.github.io/stretch-arms-prototype/releases.html
- Version catalog: https://coca-in-a-cola.github.io/stretch-arms-prototype/r13-contact-hands/releases.html
- Six-round maximum, 25-second pauses, 20-second request timeout; actual rounds: 2.
- Exact pending URLs: none

| URL | HTTP | SHA256 received | SHA256 expected | Match |
| --- | --- | --- | --- | --- |
| https://coca-in-a-cola.github.io/stretch-arms-prototype/ | 200 | f4060f3a0135939e76680f6e429e1f2ebac5bfe418a95cd14bff9b4de5daef69 | f4060f3a0135939e76680f6e429e1f2ebac5bfe418a95cd14bff9b4de5daef69 | True |
| https://coca-in-a-cola.github.io/stretch-arms-prototype/assets/gen_herald_nopaper_lean-BpJTD_uC.png | 200 | 3f968aeb7a562a46087a9bf11e1fd2c76bb24cd2bd201bce496abe6b898e7f25 | 3f968aeb7a562a46087a9bf11e1fd2c76bb24cd2bd201bce496abe6b898e7f25 | True |
| https://coca-in-a-cola.github.io/stretch-arms-prototype/assets/gen_herald_nopaper_lean-sWeu0_E1.js | 200 | 35cc0f70fc9f5c90608693b6fe14ace517abb92300c6df17422a162b37dee004 | 35cc0f70fc9f5c90608693b6fe14ace517abb92300c6df17422a162b37dee004 | True |
| https://coca-in-a-cola.github.io/stretch-arms-prototype/assets/gen_herald_nopaper_lean.png | 200 | 3f968aeb7a562a46087a9bf11e1fd2c76bb24cd2bd201bce496abe6b898e7f25 | 3f968aeb7a562a46087a9bf11e1fd2c76bb24cd2bd201bce496abe6b898e7f25 | True |
| https://coca-in-a-cola.github.io/stretch-arms-prototype/assets/gen_herald_nopaper_mad-BwzEVxw5.png | 200 | bcc61cadd5981e84b3d95b74a19e992fd2475da2d2af5dc7edbcdc29aec09dbf | bcc61cadd5981e84b3d95b74a19e992fd2475da2d2af5dc7edbcdc29aec09dbf | True |
| https://coca-in-a-cola.github.io/stretch-arms-prototype/assets/gen_herald_nopaper_mad-CjappM9r.js | 200 | 763d12117e4251837a6f50cb5712c43744252d544ef9addf61a8f0ad3e825295 | 763d12117e4251837a6f50cb5712c43744252d544ef9addf61a8f0ad3e825295 | True |
| https://coca-in-a-cola.github.io/stretch-arms-prototype/assets/gen_herald_nopaper_mad.png | 200 | bcc61cadd5981e84b3d95b74a19e992fd2475da2d2af5dc7edbcdc29aec09dbf | bcc61cadd5981e84b3d95b74a19e992fd2475da2d2af5dc7edbcdc29aec09dbf | True |
| https://coca-in-a-cola.github.io/stretch-arms-prototype/assets/index-DTQ8xavb.js | 200 | 549c8dc7a8cd5f88e0dc07b6ad879fcd6252b8cadb15ecedf05debfee4aec24f | 549c8dc7a8cd5f88e0dc07b6ad879fcd6252b8cadb15ecedf05debfee4aec24f | True |
| https://coca-in-a-cola.github.io/stretch-arms-prototype/assets/main-CARjuM8G.js | 200 | 3b6d34e69499acbfddab4b9f6b97bd7d43561eec9f0fcd1f1f6043f2b4fc9a52 | 3b6d34e69499acbfddab4b9f6b97bd7d43561eec9f0fcd1f1f6043f2b4fc9a52 | True |
| https://coca-in-a-cola.github.io/stretch-arms-prototype/build-commit.txt | 200 | 41ae1a9d93b676f72b95babca88b3a40355e6a86fb83ba48abc57451f15b26ac | 41ae1a9d93b676f72b95babca88b3a40355e6a86fb83ba48abc57451f15b26ac | True |
| https://coca-in-a-cola.github.io/stretch-arms-prototype/index.html | 200 | f4060f3a0135939e76680f6e429e1f2ebac5bfe418a95cd14bff9b4de5daef69 | f4060f3a0135939e76680f6e429e1f2ebac5bfe418a95cd14bff9b4de5daef69 | True |
| https://coca-in-a-cola.github.io/stretch-arms-prototype/r11-gestures/ | 200 | a57ff5bf61f675ba15e12c678fa66c6dc372236cfe449bd8b73ed51c15b17a24 | a57ff5bf61f675ba15e12c678fa66c6dc372236cfe449bd8b73ed51c15b17a24 | True |
| https://coca-in-a-cola.github.io/stretch-arms-prototype/r12-double-tap/ | 200 | 51b9f19ab2f23ffdbb1214562c6a79d2abb664caec9e00cf71a4a4eaa46f6c2d | 51b9f19ab2f23ffdbb1214562c6a79d2abb664caec9e00cf71a4a4eaa46f6c2d | True |
| https://coca-in-a-cola.github.io/stretch-arms-prototype/r13-contact-hands/ | 200 | f4060f3a0135939e76680f6e429e1f2ebac5bfe418a95cd14bff9b4de5daef69 | f4060f3a0135939e76680f6e429e1f2ebac5bfe418a95cd14bff9b4de5daef69 | True |
| https://coca-in-a-cola.github.io/stretch-arms-prototype/r13-contact-hands/assets/gen_herald_nopaper_lean-BpJTD_uC.png | 200 | 3f968aeb7a562a46087a9bf11e1fd2c76bb24cd2bd201bce496abe6b898e7f25 | 3f968aeb7a562a46087a9bf11e1fd2c76bb24cd2bd201bce496abe6b898e7f25 | True |
| https://coca-in-a-cola.github.io/stretch-arms-prototype/r13-contact-hands/assets/gen_herald_nopaper_lean-sWeu0_E1.js | 200 | 35cc0f70fc9f5c90608693b6fe14ace517abb92300c6df17422a162b37dee004 | 35cc0f70fc9f5c90608693b6fe14ace517abb92300c6df17422a162b37dee004 | True |
| https://coca-in-a-cola.github.io/stretch-arms-prototype/r13-contact-hands/assets/gen_herald_nopaper_lean.png | 200 | 3f968aeb7a562a46087a9bf11e1fd2c76bb24cd2bd201bce496abe6b898e7f25 | 3f968aeb7a562a46087a9bf11e1fd2c76bb24cd2bd201bce496abe6b898e7f25 | True |
| https://coca-in-a-cola.github.io/stretch-arms-prototype/r13-contact-hands/assets/gen_herald_nopaper_mad-BwzEVxw5.png | 200 | bcc61cadd5981e84b3d95b74a19e992fd2475da2d2af5dc7edbcdc29aec09dbf | bcc61cadd5981e84b3d95b74a19e992fd2475da2d2af5dc7edbcdc29aec09dbf | True |
| https://coca-in-a-cola.github.io/stretch-arms-prototype/r13-contact-hands/assets/gen_herald_nopaper_mad-CjappM9r.js | 200 | 763d12117e4251837a6f50cb5712c43744252d544ef9addf61a8f0ad3e825295 | 763d12117e4251837a6f50cb5712c43744252d544ef9addf61a8f0ad3e825295 | True |
| https://coca-in-a-cola.github.io/stretch-arms-prototype/r13-contact-hands/assets/gen_herald_nopaper_mad.png | 200 | bcc61cadd5981e84b3d95b74a19e992fd2475da2d2af5dc7edbcdc29aec09dbf | bcc61cadd5981e84b3d95b74a19e992fd2475da2d2af5dc7edbcdc29aec09dbf | True |
| https://coca-in-a-cola.github.io/stretch-arms-prototype/r13-contact-hands/assets/index-DTQ8xavb.js | 200 | 549c8dc7a8cd5f88e0dc07b6ad879fcd6252b8cadb15ecedf05debfee4aec24f | 549c8dc7a8cd5f88e0dc07b6ad879fcd6252b8cadb15ecedf05debfee4aec24f | True |
| https://coca-in-a-cola.github.io/stretch-arms-prototype/r13-contact-hands/assets/main-CARjuM8G.js | 200 | 3b6d34e69499acbfddab4b9f6b97bd7d43561eec9f0fcd1f1f6043f2b4fc9a52 | 3b6d34e69499acbfddab4b9f6b97bd7d43561eec9f0fcd1f1f6043f2b4fc9a52 | True |
| https://coca-in-a-cola.github.io/stretch-arms-prototype/r13-contact-hands/build-commit.txt | 200 | 41ae1a9d93b676f72b95babca88b3a40355e6a86fb83ba48abc57451f15b26ac | 41ae1a9d93b676f72b95babca88b3a40355e6a86fb83ba48abc57451f15b26ac | True |
| https://coca-in-a-cola.github.io/stretch-arms-prototype/r13-contact-hands/index.html | 200 | f4060f3a0135939e76680f6e429e1f2ebac5bfe418a95cd14bff9b4de5daef69 | f4060f3a0135939e76680f6e429e1f2ebac5bfe418a95cd14bff9b4de5daef69 | True |
| https://coca-in-a-cola.github.io/stretch-arms-prototype/r13-contact-hands/releases.html | 200 | a30ae2ca86be859c4bb55b4341303766210bf86ee5b718e6c132dc0d6f3fa99c | a30ae2ca86be859c4bb55b4341303766210bf86ee5b718e6c132dc0d6f3fa99c | True |
| https://coca-in-a-cola.github.io/stretch-arms-prototype/r3-bw/ | 200 | 64037b4ddccf49998d30037a164c5927b2788ea071ac38397c0b1f836b23bbb5 | 64037b4ddccf49998d30037a164c5927b2788ea071ac38397c0b1f836b23bbb5 | True |
| https://coca-in-a-cola.github.io/stretch-arms-prototype/r4-bar/ | 200 | 1903fdd8caae32ab7e704dfdbf146dc093651f1d52b23b4ee18bc5b8cd8dc7cd | 1903fdd8caae32ab7e704dfdbf146dc093651f1d52b23b4ee18bc5b8cd8dc7cd | True |
| https://coca-in-a-cola.github.io/stretch-arms-prototype/r5-props/ | 200 | 1903fdd8caae32ab7e704dfdbf146dc093651f1d52b23b4ee18bc5b8cd8dc7cd | 1903fdd8caae32ab7e704dfdbf146dc093651f1d52b23b4ee18bc5b8cd8dc7cd | True |
| https://coca-in-a-cola.github.io/stretch-arms-prototype/r6-bar-first/ | 200 | 9a8696f21660b6bd7531fe84e0ab7c44edaeb2547a5e1578385c107a7e588cff | 9a8696f21660b6bd7531fe84e0ab7c44edaeb2547a5e1578385c107a7e588cff | True |
| https://coca-in-a-cola.github.io/stretch-arms-prototype/r7-balanced/ | 200 | 9a8696f21660b6bd7531fe84e0ab7c44edaeb2547a5e1578385c107a7e588cff | 9a8696f21660b6bd7531fe84e0ab7c44edaeb2547a5e1578385c107a7e588cff | True |
| https://coca-in-a-cola.github.io/stretch-arms-prototype/r7-friends/ | 200 | a2544f3b48209855ea47fdb6f7f0c1f59a6481807838b69625d07d9a217cdd96 | a2544f3b48209855ea47fdb6f7f0c1f59a6481807838b69625d07d9a217cdd96 | True |
| https://coca-in-a-cola.github.io/stretch-arms-prototype/r8-herald/ | 200 | b7992fe6cbd9aa3ea369dc6eaedad6d68b9695f9e3bd97823c324d785bba3bfe | b7992fe6cbd9aa3ea369dc6eaedad6d68b9695f9e3bd97823c324d785bba3bfe | True |
| https://coca-in-a-cola.github.io/stretch-arms-prototype/releases.html | 200 | ddb3a4ad2a76a874e41c10ab3e9867a873f0880fbbcbcf04da2d425bfa5dae32 | ddb3a4ad2a76a874e41c10ab3e9867a873f0880fbbcbcf04da2d425bfa5dae32 | True |

## Catalog, preservation, idempotency
- Prepared patch applied after dist copy; git apply --check passed both applications. Canonical catalog has 11 static cards and no-JS count 11; r13, r12, r11 retained along with nine earlier catalog archives. All launch URLs resolved and were HTTP/hash checked, including from rebased version catalog.
- Version catalog mechanically prefixes relative hrefs with ../; canonical root remains authoritative.
- All 600 previous archive files retained byte-identically. Every previous root assets blob/path retained identically (git ls-tree subset check). No deletions.
- Identical second artifact application tree: `cf8f05d8e0b16c1460168b964a6e593d77bf276c`; first: `cf8f05d8e0b16c1460168b964a6e593d77bf276c`. Actual tree equality; one deployment commit only.
- Root/version index, entry/main JS, new lean/mad PNGs and loader modules compared with exact dist. Catalogs compared with prepared-patch deployment files; markers with built SHA.

## Scope and remaining product caveats
- User accepted 263 tests, build exit 0, final mobile exit 0, full herald parent proc_a3c689509955 exit 0 (log: /home/tyler/.hermes/profiles/tyler/cache/scratch/sa028f-herald.log). Not rerun by DevOps.
- Six tutorial runtime images visually PASS: evidence/SA-028g-visual-review.md.
- Physical phone not tested. Mad/tear runtime visuals UNKNOWN. Point pose rejected, not selected; retained archived/bundled asset is not a blocker.
- Only normal gh-pages/tag pushes; existing Git credential helper. No main, force push, history rewrite, infra/service/Namecheap/secret changes, or software hand edits. Dirty preexisting evidence left untouched.
- Author DevOps; committer Tyler; Task SA-028; coauthor Дмитрий Дронов per existing format.
- Card t_b8d97a2a left open for parent. A subsequent receipt-only prototype commit does not change built marker/tag SHA.
