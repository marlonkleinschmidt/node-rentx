import fs from 'fs';


export const deleteFile = async(filename: string) => {

  try {
    // stat -> verifica se o arquivo existe
    await fs.promises.stat(filename);      
  } catch (error) {
    return;
  }

  // unlink -> remove o arquivo
  await fs.promises.unlink(filename);
  

} 