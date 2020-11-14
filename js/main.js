const input = document.querySelector('input'),
      lengthPass = document.querySelector('.input-length');
      genPass = document.querySelector('.genPass'),
      copyPass = document.querySelector('.copyPass');

lengthPass.value = 10;

genPass.addEventListener('click', () => {
  genPass.classList.add('rotate');
  setTimeout(() => {

    input.value = GeneratorPassword(+lengthPass.value);
    genPass.classList.remove('rotate');
  }, 400);
});

copyPass.addEventListener('click', () => {
  if(input.value != '') {
    input.select();
    document.execCommand("copy");
  }
});

const GeneratorPassword = (length = lengthPass.value) => {
  const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&?';
  let password = '';

  for (let i = 0; i < length; i++) {
    let at = Math.floor(Math.random() * (charset.length + 1));
    password += charset.charAt(at);
  }
  return password;
};

input.value = GeneratorPassword(lengthPass.value);