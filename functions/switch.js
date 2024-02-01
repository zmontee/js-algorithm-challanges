export const switchToIf = (browser) => {
  // * TRANSFORM THIS INTO IF..ELSE
  // switch (browser) {
  //   case 'Edge':
  //     alert( "You've got the Edge!" );
  //     break;
  //
  //   case 'Chrome':
  //   case 'Firefox':
  //   case 'Safari':
  //   case 'Opera':
  //     alert( 'Ми підтримуємо і ці браузери' );
  //     break;
  //
  //   default:
  //     alert( 'Маємо надію, що ця сторінка виглядає добре!' );
  // }
  if (browser === 'Edge') {
      alert("Edge is your browser");
  } else if (browser === 'Chrome' || browser === 'Firefox' || browser === 'Safari' || browser === 'Opera') {
    alert("We support this browsers");
  } else {
    alert("We hope this page looks good!")
  }
}

export const ifToSwitch = () => {
  let a = +prompt('a?', '');
  // * TRANSFORM THIS INTO SWITCH
  // let a = +prompt('a?', '');
  //
  // if (a == 0) {
  //   alert( 0 );
  // }
  // if (a == 1) {
  //   alert( 1 );
  // }
  //
  // if (a == 2 || a == 3) {
  //   alert( '2,3' );
  // }
  switch (a) {
    case 0:
      alert(0);
      break;
    case 1:
      alert(1);
      break;
    case 2:
    case 3:
      alert('2, 3');
      break;
  }
}