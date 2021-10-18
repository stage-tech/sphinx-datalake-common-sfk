import { CodeGenerator } from './lib/code-generator';
import { AssetRecipe } from './recipes/asset/recipe';

const envName = process.argv[2];
const runningFrom: string = process.cwd() + '/generated';

new CodeGenerator().run(runningFrom, envName, [new AssetRecipe(envName)]);
