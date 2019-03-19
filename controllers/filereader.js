import fs from 'fs';

const _ = fs.readFile('../ptc-76-ticketed-pinky.json', (err, data) => {
  if (err) throw err;
  const ptcdata = JSON.parse(data);
  console.log(ptcdata);
});
