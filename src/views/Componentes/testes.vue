data() {
    <div recuo>
        <span blue>var</span> checkAge = (rule, value, <span yellow>callback</span>) =&#62; {
          <span roxo>if</span> (!value) {
            <div recuo><span roxo>return</span> <span yellow>callback</span>(new Error('Please input the age'));</div>
          }
          setTimeout(() =&#62; {
            <span roxo>if</span> (!Number.isInteger(value)) {
              <div recuo><span yellow>callback</span>(new Error('Please input digits'));</div>
            } else {
              <span roxo>if</span> (value &#60; 18) {
                <div recuo><span yellow>callback</span>(new Error('Age must be greater than 18'));</div>
              } else {
                <div recuo><span yellow>callback</span>();</div>
              }
            }
          }, <span green>1000</span>);
        };
        <span blue>var</span> validatePass = (rule, value, <span yellow>callback</span>) =&#62; {
          <span roxo>if</span> (value === '') {
            <div recuo><span yellow>callback</span>(new Error('Please input the password'));</div>
          } else {
            <div recuo>
                <span roxo>if</span> (this.ruleForm.checkPass !== '') {
                  this.$refs.ruleForm.validateField('checkPass');
                }
                <span yellow>callback</span>();
            </div>
          }
        };
        <span blue>var</span> validatePass2 = (rule, value, <span yellow>callback</span>) =&#62; {
          <span roxo>if</span> (value === '') {
            <span yellow>callback</span>(new Error('Please input the password again'));
          } else <span roxo>if</span> (value !== this.ruleForm.pass) {
            <span yellow>callback</span>(new Error('Two inputs don\'t match!'));
          } else {
            <span yellow>callback</span>();
          }
        };
        <span roxo>return</span> {
          alertDm: <span blue>false,</span>
          upPopup: <span blue>false,</span>
          idPopup: null,
          ruleForm: {
            <div recuo>
                pass: '',
                checkPass: '',
                age: ''
            </div>
          },
          rules: {
            pass: [
              <div recuo>{ validator: validatePass, trigger: <span brown>'blur'</span> }</div>
            ],
            checkPass: [
              <div recuo>{ validator: validatePass2, trigger: <span brown>'blur'</span> }</div>
            ],
            age: [
              <div recuo>{ validator: checkAge, trigger: <span brown>'blur'</span> }</div>
            ]
          },
          headerTitle: <span brown>"Mensagens"</span>,
        };
    </div>
  },