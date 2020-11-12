const input = document.querySelector('input'),
      genPass = document.querySelector('.genPass'),
      copyPass = document.querySelector('.copyPass');

   
genPass.addEventListener('click', () => {
  genPass.classList.add('rotate');
  setTimeout(() => {
    input.value = GeneratorPassword(8);
    genPass.classList.remove('rotate');
  }, 400);
});

copyPass.addEventListener('click', () => {
  if(input.value != '') {
    input.select();
    document.execCommand("copy");
  }
});

const GeneratorPassword = (length = 8) => {
  const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&?';
  let password = '';

  for (let i = 0; i < length; i++) {
    let at = Math.floor(Math.random() * (charset.length + 1));
    password += charset.charAt(at);
  }
  return password;
};

input.value = GeneratorPassword(8);