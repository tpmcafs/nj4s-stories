import json, os
here = os.path.dirname(os.path.abspath(__file__))
rd = lambda f: open(os.path.join(here, f), encoding='utf-8').read()
t = rd('template2.html')
ph = json.loads(rd('photos.json'))
body = t + rd('dims.json')
ph = {k: v for k, v in ph.items() if ('"' + k + '"') in body or ("'" + k + "'") in body or ('photo("' + k) in body}
t = t.replace('/*BOWL3D*/', rd('bowl3d.js')).replace('/*DATA*/', rd('data.json')).replace('/*PHOTOS*/', json.dumps(ph, ensure_ascii=False)).replace('/*DIMS*/', rd('dims.json'))
open(os.path.join(here, '..', 'index.html'), 'w', encoding='utf-8').write(t)
print('photos used:', sorted(ph))
