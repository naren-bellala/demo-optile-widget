require('shelljs/global');
mkdir('-p', 'build');
mkdir('-p', 'build/src');
// Copy content
cp('-R', 'src/.', 'build');
