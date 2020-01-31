const HeroesTalents = require('heroes-talents');
const fs = require('fs');
const fsx = require('fs-extra');
const path = require('path');

const baseDir = path.resolve(__dirname, "../");

HeroesTalents.loadHeroJSONFiles().then((heroes) => {
    fs.writeFileSync(`${baseDir}/src/Hero/data.json`, JSON.stringify(heroes));
});

fsx.copySync(`${baseDir}/node_modules/heroes-talents/images/heroes`, `${baseDir}/public/images/heroes`);
fsx.copySync(`${baseDir}/node_modules/heroes-talents/images/talents`, `${baseDir}/public/images/talents`);