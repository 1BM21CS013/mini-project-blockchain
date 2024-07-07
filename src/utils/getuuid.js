export const getuuid = () => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let shortUUID = '';
  for (let i = 0; i < 6; i++) {
    shortUUID += chars.charAt(Math.floor(Math.random() * chars.length));
  }  
  return shortUUID;
};