const path = require('path');

// Basics Node: file system
// ! 1. __dirname: es una variable global que representa el nombre del direcrio del modulo alctual. Proporciona la ruta completa al directorio que contiene el script actualmente en ejecucion.

const dirName = __dirname;
console.log(`This is my actual route: "${dirName}"`);

// ? 2. __filename: es una variable global que representa la ruta completa del alrchivo del modulo actual a '__dirname', '__filename' proporciona la ruta completa, pero se enfoca especificamente en el archivo actual en lugar dek directorio.

const fileName = __filename;
console.log(`this is the file name: "${fileName}"`);

// * 3. en Node.js puedes utilizar el modulo 'path' para trabajar con rutas de archivos y obtener el nombre base de un archivo utlizando la funcion 'path.basename()'

const baseName = path.basename(fileName);
console.log(baseName);

// todo:: la funcion 'path.basename()' tambien acepta un segundo argumento opcional, que es un string que especifica la extension a ser eliminada del nombre del archivo. si se proporciona esta extencion y el nombre del archuivo coincide con la extension, la extension completa se eliminara del resultado.


const baseName2 = path.basename(fileName, '.js')
console.log(baseName2);
