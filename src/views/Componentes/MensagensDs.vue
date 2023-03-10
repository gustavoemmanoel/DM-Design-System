<template>
  <el-container>
    <el-header>
      <HeaderDs :headerTitle="headerTitle" />
    </el-header>
    <el-container>
      <el-main>
        <div class="containerInterno">
          <div>
            <h1>/Mensagens</h1>
            <hr />
            <br>
            <p>
              Mensagens aparecem na tela para comunicar ao usuário informações importantes antes de executar alguma
              ação, durante a utilização do sistema ou após alguma ação ser executada.
            </p>
          </div>
          <br />


          <div class="cont-elements">
            <h3>Erro</h3>
            <p>A mensagem de erro é uma resposta inesperada a uma ação executada pelo usuário e pode causar frustração.
              Por isso, precisa ser relevante, útil e clara. O usuário deve ser informado sobre o que aconteceu e
              orientado sobre como resolver. </p>
            <br />
            <h6>Em caixas de texto obrigatória:</h6>
            <br>
            <p>Quando é obrigatório preencher um campo para seguir com a ação ou quando o formato da informação é
              incompatível com o formato correto.</p>
            <br>
            <br>

            <el-form label-position="top" :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px"
              class="demo-ruleForm">
              <el-form-item label="Password" prop="pass">
                <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="Confirm" prop="checkPass">
                <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="Age" prop="age">
                <el-input v-model.number="ruleForm.age"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">Enviar</el-button>
                <el-button @click="resetForm('ruleForm')">Resetar</el-button>
              </el-form-item>
            </el-form>

            <el-collapse v-model="activeids" @change="handleChange">
              <el-collapse-item title="Ver código">
                <!-- HTML -->
                <div class="html_codigos">
                  &#60;<span tagColor>template</span>&#62;
                  <div class="border-left">
                    <div recuo>
                      &#60;<span tagColor>el-form</span>
                      <div recuo>label-position=<span roxo>"top"</span> <br>
                        :model=<span roxo>"ruleForm"</span> <br>
                        :rules=<span roxo>"rules"</span> <br>
                        ref=<span roxo>"ruleForm"</span> <br>
                        label-width=<span roxo>"120px"</span> <br>
                        class=<span roxo>"demo-ruleForm"</span></div>&#62;
                      <div class="border-left">
                        <div recuo>
                          &#60;<span tagColor>el-form-item</span> label=<span roxo>"Password"</span> prop=<span
                            roxo>"pass"</span>&#62;
                          <br>
                          <div class="border-left">
                            <div recuo>
                              &#60;<span tagColor>el-input</span> type=<span roxo>"password"</span> v-model=<span
                                roxo>"ruleForm.pass"</span> autocomplete=<span roxo>"off"</span>&#62;&#60;/<span
                                tagColor>el-input</span>&#62;
                            </div>
                          </div>
                          &#60;/<span tagColor>el-form-item</span>&#62;
                          <br>
                          &#60;<span tagColor>el-form-item</span> label=<span roxo>"Confirm"</span> prop=<span
                            roxo>"checkPass"</span>&#62;
                          <br>
                          <div class="border-left">
                            <div recuo>
                              &#60;<span tagColor>el-input</span> type=<span roxo>"password"</span> v-model=<span
                                roxo>"ruleForm.checkPass"</span> autocomplete=<span roxo>"off"</span>&#62;
                              &#60;/<span tagColor>el-input</span>&#62;
                            </div>
                          </div>
                          &#60;/<span tagColor>el-form-item</span>&#62;
                          <br>
                          &#60;<span tagColor>el-form-item</span> label=<span roxo>"Age"</span> prop=<span
                            roxo>"age"</span>&#62;
                          <div class="border-left">
                            <div recuo>
                              &#60;<span tagColor>el-input</span> v-model.number=<span
                                roxo>"ruleForm.age"</span>&#62;&#60;/<span tagColor>el-input</span>&#62;
                            </div>
                          </div>
                          &#60;/<span tagColor>el-form-item</span>&#62;
                          <br>
                          &#60;<span tagColor>el-form-item</span>&#62;
                          <div class="border-left">
                            <div recuo>
                              &#60;<span tagColor>el-button</span> type=<span roxo>"primary"</span> @click=<span
                                roxo>"submitForm('ruleForm')"</span>&#62;Enviar&#60;/<span tagColor>el-button</span>&#62;
                              <br>
                              &#60;<span tagColor>el-button</span> @click=<span
                                roxo>"resetForm('ruleForm')"</span>&#62;Resetar&#60;/<span tagColor>el-button</span>&#62;
                            </div>
                          </div>
                          &#60;/<span tagColor>el-form-item</span>&#62;
                        </div>
                      </div>
                      &#60;/<span tagColor>el-form</span>&#62;
                    </div>
                  </div>

                  &#60;/<span tagColor>template</span>&#62;
                </div>

                <!-- SCRIPTS -->
                <br>
                <br>
                <div class="html_codigos">
                  &#60;<span tagColor>script</span>&#62;
                  <br>
                  <span roxo>export default</span> {
                  <div class="border-left">
                    <div recuo>
                      <span yellow>data</span>() {
                      <div class="border-left">
                        <div recuo>
                          <span blue>var</span> checkAge = (rule, value, <span yellow>callback</span>) =&#62; {
                          <div class="border-left">
                            <div recuo>
                              <span roxo>if</span> (!<span blue2>value</span>) {
                              <div class="border-left">
                                <div recuo>
                                  <span roxo>return</span> <span yellow>callback</span>(new Error(<span brown>'Please
                                    input
                                    the
                                    age'</span>));
                                </div>
                              </div>
                              }
                              <br>
                              <span yellow>setTimeout</span>(() =&#62; {
                              <div class="border-left">
                                <div recuo>
                                  <span roxo>if</span> (!Number.isInteger(<span blue2>value</span>)) {
                                  <div class="border-left">
                                    <div recuo><span yellow>callback</span>(new Error(<span brown>'Please input
                                        digits'</span>));
                                    </div>
                                  </div>
                                  } <span roxo>else</span> {
                                  <br>
                                  <div class="border-left">
                                    <div recuo>
                                      <span roxo>if</span> (<span blue2>value</span> &#60; <span green>18</span>) {
                                      <div class="border-left">
                                        <div recuo><span yellow>callback</span>(new Error(<span brown>'Age must be greater
                                            than
                                            18'</span>));</div>
                                      </div>
                                      } <span roxo>else</span> {
                                      <div class="border-left">
                                        <div recuo><span yellow>callback</span>();</div>
                                      </div>
                                      } <br>
                                    </div>
                                  </div>
                                  } <br>
                                </div>
                              </div>
                              }, <span green>1000</span>);
                            </div>
                          </div>
                          };
                          <br>
                          <span blue>var</span> <span yellow>validatePass</span> = (rule, value, callback) =&#62; {
                          <div class="border-left">
                            <div recuo>
                              <span roxo>if</span> (value === <span brown>''</span>) {
                              <div class="border-left">
                                <div recuo><span yellow>callback</span>(new Error(<span brown>'Please input the
                                    password'</span>));
                                </div>
                              </div>
                              } <span roxo>else</span> {
                              <div class="border-left">
                                <div recuo>
                                  <span roxo>if</span> (<span blue>this</span>.ruleForm.checkPass !== <span
                                    brown>''</span>)
                                  {<br>
                                  <span blue>this</span>.$refs.ruleForm.validateField(<span brown>'checkPass'</span>);<br>
                                  }
                                  <span yellow>callback</span>();<br>
                                </div>
                              </div>
                              }<br>
                            </div>
                          </div>
                          };<br>
                          <span blue>var</span> <span yellow>validatePass2</span> = (rule, value, callback) =&#62; {
                          <div class="border-left">
                            <div recuo>
                              <span roxo>if</span> (<span blue2>value</span> === <span brown>''</span>) {
                              <div class="border-left">
                                <div recuo><span yellow>callback</span>(new Error(<span brown>'Please input the password
                                    again'</span>));
                                </div>
                              </div>
                              }<span roxo> else if</span> (<span blue2>value</span> !== this.ruleForm.pass) {
                              <div class="border-left">
                                <div recuo>
                                  <span yellow>callback</span>(new Error(<span brown>'Two inputs don\'t match!'</span>));
                                </div>
                              </div>
                              } else {<br>
                              <div class="border-left">
                                <div recuo><span yellow>callback</span>();</div>
                              </div>
                              }<br>
                            </div>
                          </div>
                          };<br>
                          <span roxo>return</span> {
                          <div class="border-left">
                            <div recuo>
                              ruleForm: {
                              <div class="border-left">
                                <div recuo>
                                  pass: <span brown>''</span>,<br>
                                  checkPass: <span brown>''</span>,<br>
                                  age: <span brown>''</span>
                                </div>
                              </div>
                              },<br>
                              rules: {<br>
                              <div class="border-left">
                                <div recuo>
                                  pass: [
                                  <div class="border-left">
                                    <div recuo>{ <span yellow>validator</span>: <span yellow>validatePass</span>, trigger:
                                      <span brown>'blur'</span> }
                                    </div>
                                  </div>
                                  ],<br>
                                  checkPass: [
                                  <div class="border-left">
                                    <div recuo>{ <span yellow>validator</span>: <span yellow>validatePass2</span>,
                                      trigger:
                                      <span brown>'blur'</span> }
                                    </div>
                                  </div>
                                  ],<br>
                                  age: [
                                  <div class="border-left">
                                    <div recuo>{ <span yellow>validator</span>: <span yellow>checkAge</span>, trigger:
                                      <span brown>'blur'</span> }
                                    </div>
                                  </div>
                                  ]<br>
                                </div>
                              </div>
                              },<br>
                            </div>
                          </div>
                          };
                        </div>
                      </div>
                      },
                      <br>
                      methods: {

                      <div class="border-left">
                        <div recuo>
                          <span yellow>submitForm</span>(<span blue2>formName</span>) {
                          <br>
                          <div class="border-left">
                            <div recuo>
                              <span blue>this</span>.$refs[<span blue2>formName</span>].<span
                                yellow>validate</span>((<span blue2>valid</span>) =>
                              {
                              <div class="border-left">
                                <div recuo>
                                  <span roxo>if</span> (<span blue2>valid</span>) {
                                  <div class="border-left">
                                    <div recuo>alert(<span brown>'submit!'</span>);</div>
                                  </div>
                                  } <span roxo>else</span> {
                                  <div class="border-left">
                                    <div recuo>
                                      console.<span yellow>log</span>(<span brown>'error submit!!'</span>);<br>
                                      <span roxo>return</span> <span blue>false</span>;
                                    </div>
                                  </div>
                                  }
                                </div>
                              </div>
                              });
                            </div>
                          </div>
                          },
                          <br>
                          <span yellow>resetForm</span>(<span blue2>formName</span>) { <br>
                          <div class="border-left">
                            <div recuo><span blue>this</span>.$refs[<span blue2>formName</span>].<span
                                yellow>resetFields</span>();</div>
                          </div>
                          },
                        </div>
                      </div>
                      }
                    </div>
                  </div>
                  },
                  <br>
                  &#60;/<span tagColor>script</span>&#62;
                </div>
              </el-collapse-item>
            </el-collapse>
          </div>


          <div class="cont-elements">
            <br>
            <h6>Erro na ação</h6>
            <br>
            <p>A ação não é permitida ou está indisponível. A mensagem é centralizada e bloqueia a tela.</p>
            <br>
            <img class="imagemExemplo" src="mensagens/erro.jpg">
            <br>
            <br>
            <div style="display: flex; gap: 20px;">
              <!-- Vitrine -->
              <dm-popup-background>
                <dm-icon AlertRed />
                <p>Erro ao carregar a edição de Rotas 01.</p>
                <p class="detail_01">A nova rota escolhida para NF ficará acima da capacidade e/ou confira sua conexão.
                </p>
                <el-row>
                  <dm-button class="el-button el-button--primario" popup="close">OK</dm-button>
                </el-row>
              </dm-popup-background>

              <!--  -->
              <!--  -->

              <span>
                <dm-popup @click="popup" popup="close">
                  <dm-popup-background>
                    <dm-icon AlertRed />
                    <p>Erro ao carregar a edição de Rotas 01.</p>
                    <p class="detail_01">A nova rota escolhida para NF ficará acima da capacidade e/ou confira sua
                      conexão.
                    </p>
                    <el-row>
                      <dm-button class="el-button el-button--primario" popup="close">Ok</dm-button>
                    </el-row>
                  </dm-popup-background>
                </dm-popup>
                <dm-button-popup @click="popup" popup="close" class="el-button el-button--primario">Ver</dm-button-popup>
              </span>
            </div>

            <br>
            <el-collapse v-model="activeids" @change="handleChange">
              <el-collapse-item title="Ver código">
                <!-- HTML -->

                <div class="html_codigos">
                  &#60;<span tagColor>template</span>&#62;
                  <div class="border-left">
                    <div recuo>
                      &#60;<span tagColor>span</span>&#62;

                      <div class="border-left">
                        <div recuo>
                          &#60;<span tagColor>dm-popup</span> @click=<span roxo>"popup"</span> popup=<span
                            roxo>"close"</span>&#62;
                          <div class="border-left">
                            <div recuo>
                              &#60;<span tagColor>dm-popup-background</span>&#62;
                              <div class="border-left">
                                <div recuo>
                                  &#60;<span tagColor>dm-icon</span> <span roxo>AlertRed</span> /&#62;<br>
                                  &#60;<span tagColor>p</span>&#62;<span black>Erro ao carregar a edição de Rotas 01.

                                  </span>&#60;/<span tagColor>p</span>&#62;<br>
                                  &#60;<span tagColor>p</span> class=<span roxo>"detail_01"</span>&#62;<span black>A nova
                                    rota
                                    escolhida para NF ficará acima da capacidade e/ou confira sua
                                    conexão.</span>&#60;/<span tagColor>p</span>&#62;<br>
                                  &#60;<span tagColor>el-row</span>&#62;<br>
                                  <border-left>
                                    <div class="border-left">
                                      <div recuo>
                                        &#60;<span tagColor>dm-button</span> class=<span roxo>"el-button
                                          el-button--primario"</span>
                                        popup=<span roxo>"close"</span>&#62;<span black>Ok</span>&#60;/<span
                                          tagColor>dm-button</span>&#62;<br>
                                      </div>
                                    </div>
                                  </border-left>
                                  &#60;/<span tagColor>el-row</span>&#62;
                                </div>
                              </div>
                              &#60;/<span tagColor>dm-popup-background</span>&#62;
                            </div>
                          </div>
                          &#60;/<span tagColor>dm-popup</span>&#62;

                          <br>
                          &#60;<span tagColor>dm-button-popup</span>

                          <div class="border-left">
                            <div recuo>
                              @click="<span yellow>popup</span>"
                              <br> popup=<span roxo>"close"</span>
                              <br>class=<span roxo>"el-button el-button--primario"</span>&#62;<span black>
                                <div class="border-left">
                                  <div recuo>Ver</div>
                                </div>
                              </span>
                            </div>
                          </div>
                          &#60;/<span tagColor>dm-button-popup</span>&#62;
                        </div>
                      </div>
                      &#60;/<span tagColor>span</span>&#62;
                    </div>
                  </div>
                  &#60;/<span tagColor>template</span>&#62;

                </div>
                <br>
                <br>
                <div class="html_codigos">
                  &#60;<span tagColor>script</span>&#62;
                  <br>
                  <span roxo>export default</span> {
                  <div class="border-left">
                    <div recuo>
                      data() {
                      <div class="border-left">
                        <div recuo>
                          <span roxo>return</span>{
                          <div class="border-left">
                            <div recuo>
                              upPopup: <span blue>false</span>, <br>
                              idPopup: <span blue>null</span>,
                            </div>
                          </div>
                          }
                        </div>
                      </div>
                      },
                      <br>
                      mounted() {
                      <div class="border-left">
                        <div recuo>
                          <span blue>this</span>.<span yellow>indexadorPopus</span>()
                        </div>
                      </div>
                      },
                      <br>
                      methods: {
                      <div class="border-left">
                        <div recuo>
                          <span yellow>indexadorPopus</span>() {
                          <div class="border-left">
                            <div recuo>
                              <span green>//INDEXA TODOS POPUPS CRIADOS NO HMTL</span> <br>
                              <span blue>const</span> <span blue2>$arrayPopups</span> = document.<span
                                yellow>querySelectorAll</span>(<span brown>'dm-popup'</span>) <br>
                              <span blue>const</span> <span blue2>$arraysButtons</span> = document.<span
                                yellow>querySelectorAll</span>(<span brown>'dm-button-popup'</span>)<br>
                              <span roxo>for</span> (let <span blue2>i</span> = <span green>0</span>; $arrayPopups.length
                              >
                              <span blue2>i</span>; <span blue2>i</span>++) {
                              <div class="border-left">
                                <div recuo>
                                  <span blue2>$arrayPopups</span>[i].style.display = <span brown>'none'</span> <br>
                                  <span blue2>$arrayPopups</span>[i].<span yellow>setAttribute</span>(<span
                                    brown>'popupid'</span>, `${<span blue2>i</span>}`) <br>
                                  <span blue2>$arraysButtons</span>[i].<span yellow>setAttribute</span>(<span
                                    brown>'popupbutton'</span>, `${<span blue2>i</span>}`)
                                </div>
                              </div>
                              }
                            </div>
                          </div>
                          },
                          <br>
                          <span yellow>popup</span>(event) {
                          <div class="border-left">
                            <div recuo>
                              <span green>//ABRE POPUP CLICADO</span> <br>

                              <span blue>const $body</span> = document.<span yellow>querySelector</span>(<span
                                brown>'body'</span>)
                              <br>
                              <span roxo>if</span> (<span blue>this</span>.upPopup === <span blue>false</span>) {
                              <div class="border-left">
                                <div recuo>
                                  <span blue>this</span>.idPopup = event.target.getAttribute(<span
                                    brown>'popupbutton'</span>)<br>
                                  <span blue>$body</span>.style.overflow = <span brown>'hidden'</span>
                                  <br>
                                  <span blue>this</span>.upPopup = <span blue>!this</span>.upPopup <br>
                                  document.<span yellow>querySelector</span>(`[popupid="${<span
                                    blue>this</span>.idPopup}"]`).style.display = <span brown>'flex'</span>
                                </div>
                              </div>
                              }
                              <br>
                              <span green>//COMPARA OS OBJETOS CLICADOS QUE PODEM FECHAR O POPUP</span>
                              <br>
                              <span roxo>else if</span> (event.target.getAttribute('popup') == <span brown>'close'</span>)
                              {
                              <div class="border-left">
                                <div recuo>
                                  <span blue>$body</span>.style.overflow = <span brown>'auto'</span> <br>
                                  <span blue>this</span>.upPopup = <span blue>!this</span>.upPopup<br>
                                  document.<span yellow>querySelector</span>(`[popupid="${<span
                                    blue>this</span>.idPopup}"]`).style.display = <span brown>'none'</span>
                                </div>
                              </div>
                              }
                            </div>
                          </div>
                          }
                        </div>
                      </div>
                      },
                    </div>
                  </div>
                  },
                  <br>
                  &#60;/<span tagColor>script</span>&#62;
                </div>
              </el-collapse-item>
            </el-collapse>

          </div>
          <div class="cont-elements">
            <h3>Aviso</h3>
            <br>
            <p>A mensagem de aviso comunica ao usuário uma informação importante, mas não impede nenhuma ação do
              usuário.
              É exibida na parte superior da tela.</p>
            <br>
            <img class="imagemExemplo" src="mensagens/alert_01.jpg">
            <br>
            <br>
            <dm-alert v-if="alertDm">
              <dm-alert-container>
                <dm-icon Alert />
                <span>
                  <dm-atencao>Atenção!</dm-atencao> Trânsito lento na Marginal Tietê. Possibilidade de atraso na
                  previsão
                  das entregas.
                </span>
                <button>
                  <dm-icon Close @click="upAlert" />
                </button>
              </dm-alert-container>
            </dm-alert>
            <dm-button-alert @click="upAlert" class="el-button el-button--primario">ver</dm-button-alert>

            <br>
            <br>
            <dm-alert-container>
              <dm-icon Alert />
              <span>
                <dm-atencao>Atenção!</dm-atencao> Trânsito lento na Marginal Tietê. Possibilidade de atraso na
                previsão
                das entregas.
              </span>
              <button>
                <dm-icon Close />
              </button>
            </dm-alert-container>

            <br>
            <el-collapse v-model="activeids" @change="handleChange">
              <el-collapse-item title="Ver código">
                <div class="html_codigos">
                  &#60;<span tagColor>template</span>&#62;
                  <div class="border-left">
                    <div recuo>
                      &#60;<span tagColor>dm-alert</span> v-if=<span roxo>"alertDm"</span>&#62;<br>
                      <div class="border-left">
                        <div recuo>
                          &#60;<span tagColor>dm-alert-container</span>&#62;<br>
                          <div class="border-left">
                            <div recuo>
                              &#60;<span tagColor>dm-icon </span><span roxo>Alert</span> /&#62; <br>
                              &#60;<span tagColor>span</span>&#62;
                              <div class="border-left">
                                <div recuo>
                                  &#60;<span tagColor>dm-atencao</span>&#62;<span black>Atenção!</span> &#60;/<span
                                    tagColor>dm-atencao</span>&#62; <span black>
                                    Trânsito lento na Marginal Tietê. Possibilidade de
                                    atraso na previsão
                                    das entregas.
                                  </span>
                                  <br>
                                </div>
                              </div>
                              &#60;/<span tagColor>span</span>&#62;
                              <br>
                              &#60;<span tagColor>button</span>&#62;<br>
                              &#60;<span tagColor>dm-icon</span> <span roxo>Close</span> @click=<span
                                roxo>"upAlert"</span>
                              /&#62;<br>
                              &#60;/<span tagColor>button</span>&#62;<br>
                            </div>
                          </div>
                          &#60;/<span tagColor>dm-alert-container</span>&#62;
                        </div>
                      </div>
                      &#60;/<span tagColor>dm-alert</span>&#62;
                      <br>
                      <br>
                      &#60;<span tagColor>dm-button-alert</span> @click=<span roxo>"upAlert"</span> class=<span
                        roxo>"el-button
                        el-button--primario"</span>&#62;<span black>ver</span>&#60;/<span
                        tagColor>dm-button-alert</span>&#62;
                      <br>
                      <br>
                    </div>
                  </div>
                  &#60;/<span tagColor>template</span>&#62;
                </div>
                <br>
                <br>
                <div class="html_codigos">
                  &#60;<span tagColor>script</span>&#62;
                  <br>
                  <span roxo>export default</span> {
                  <div class="border-left">
                    <div recuo>
                      data() {
                      <div class="border-left">
                        <div recuo>
                          <span roxo>return</span>{
                          <div class="border-left">
                            <div recuo>
                              alertDm: <span blue>false</span>,
                            </div>
                          </div>
                          }
                        </div>
                      </div>
                      },
                      <br>
                      methods: {
                      <div class="border-left">
                        <div recuo>
                          <span yellow>upAlert</span>() {
                          <div class="border-left">
                            <div recuo>

                              <span roxo>if</span> (<span blue>this</span>.alertDm == <span blue>false</span>) {
                              <div class="border-left">
                                <div recuo>
                                  <span blue>this</span>.alertDm = <span blue>true</span>
                                  <br>
                                  <span yellow>setTimeout</span>(() => {
                                  <div class="border-left">
                                    <div recuo>
                                      <span blue>this</span>.alertDm = <span blue>false</span>
                                    </div>
                                  </div>
                                  }, <span green>5000</span>)
                                </div>
                              </div>
                              } <span roxo>else if </span>(<span blue>this</span>.alertDm == <span blue>true</span>) {
                              <div class="border-left">
                                <div recuo>
                                  <span blue>this</span>.alertDm = <span blue>this</span>.alertDm = <span
                                    blue>false</span>
                                </div>
                              </div>
                              }
                            </div>
                          </div>
                          },

                        </div>
                      </div>
                      },
                    </div>
                  </div>
                  },
                  <br>
                  &#60;/<span tagColor>script</span>&#62;
                </div>

              </el-collapse-item>
            </el-collapse>
          </div>
          <div class="cont-elements">
            <h3>Alerta</h3>
            <br>
            <p>A mensagem de alerta bloqueia a tela em razão da sensibilidade quanto a uma possível perda de informação
              e documentação. Ela também solicita a confirmação da escolha de uma ação do usuário e exibe o aviso de
              confirmação, ou não, da execução da ação.
            </p>
            <br>
            <img class="imagemExemplo" src="mensagens/alert_02.jpg">
            <br>
            <br>

            <div style="display: flex; gap: 20px;">

              <dm-popup-background>
                <dm-icon AlertYellow />
                <p>Você tem acerteza de que quer apagar este romaneio?</p>
                <p class="detail_01">Não será possível visualizar ou recuperar o romaneio.</p>
                <el-row>
                  <dm-button class="el-button el-button--primario" popup="close">Sim</dm-button>
                  <dm-button class="el-button el-button--secundario">Não</dm-button>
                </el-row>
              </dm-popup-background>

              <dm-popup @click="popup" popup="close">
                <dm-popup-background>
                  <dm-icon AlertYellow />
                  <p>Você tem acerteza de que quer apagar este romaneio?</p>
                  <p class="detail_01">Não será possível visualizar ou recuperar o romaneio.</p>
                  <el-row>
                    <dm-button class="el-button el-button--primario" popup="close">Sim</dm-button>
                    <dm-button class="el-button el-button--secundario">Não</dm-button>
                  </el-row>
                </dm-popup-background>
              </dm-popup>
              <dm-button-popup @click="popup" popup="close" class="el-button el-button--primario">Ver</dm-button-popup>

            </div>
            <br>

            <el-collapse v-model="activeids" @change="handleChange">
              <el-collapse-item title="Ver código">

                <div class="html_codigos">
                  &#60;<span tagColor>template</span>&#62;

                  <div class="border-left">
                    <div recuo>
                      &#60;<span tagColor>dm-popup</span> @click=<span roxo>"popup"</span> popup=<span
                        roxo>"close"</span>&#62;
                      <div class="border-left">
                        <div recuo>
                          &#60;<span tagColor>dm-popup-background</span>&#62;
                          <div class="border-left">
                            <div recuo>
                              &#60;<span tagColor>dm-icon</span> <span roxo>AlertYellow</span> /&#62;<br>
                              &#60;<span tagColor>p</span>&#62;<span black>Você tem acerteza de que quer apagar este
                                romaneio?</span>&#60;/<span tagColor>p</span>&#62;<br>
                              &#60;<span tagColor>p</span> class=<span roxo>"detail_01"</span>&#62;<span black>Não será
                                possível
                                visualizar ou recuperar o romaneio.</span>&#60;/<span tagColor>p</span>&#62;<br>
                              &#60;<span tagColor>el-row</span>&#62;<br>
                              <border-left>
                                <div class="border-left">
                                  <div recuo>
                                    &#60;<span tagColor>dm-button</span> class=<span roxo>"el-button
                                      el-button--primario"</span>
                                    popup=<span roxo>"close"</span>&#62;<span black>Sim</span>&#60;/<span
                                      tagColor>dm-button</span>&#62;<br>
                                    &#60;<span tagColor>dm-button</span> class=<span roxo>"el-button
                                      el-button--secundario"</span>&#62;<span black>Não</span>&#60;/<span
                                      tagColor>dm-button</span>&#62;
                                  </div>
                                </div>
                              </border-left>
                              &#60;/<span tagColor>el-row</span>&#62;
                            </div>
                          </div>
                          &#60;/<span tagColor>dm-popup-background</span>&#62;
                        </div>
                      </div>
                      &#60;/<span tagColor>dm-popup</span>&#62;

                      <br>
                      &#60;<span tagColor>dm-button-popup</span>

                      <div class="border-left">
                        <div recuo>
                          @click="<span yellow>popup</span>"
                          <br> popup=<span roxo>"close"</span>
                          <br>class=<span roxo>"el-button el-button--primario"</span>&#62;<span black>
                            <div class="border-left">
                              <div recuo>Ver</div>
                            </div>
                          </span>
                        </div>
                      </div>
                      &#60;/<span tagColor>dm-button-popup</span>&#62;
                    </div>
                  </div>
                  &#60;/<span tagColor>template</span>&#62;

                </div>
                <br>
                <br>
                <div class="html_codigos">
                  &#60;<span tagColor>script</span>&#62;
                  <br>
                  <span roxo>export default</span> {
                  <div class="border-left">
                    <div recuo>
                      data() {
                      <div class="border-left">
                        <div recuo>
                          <span roxo>return</span>{
                          <div class="border-left">
                            <div recuo>
                              upPopup: <span blue>false</span>, <br>
                              idPopup: <span blue>null</span>,
                            </div>
                          </div>
                          }
                        </div>
                      </div>
                      },
                      <br>
                      mounted() {
                      <div class="border-left">
                        <div recuo>
                          <span blue>this</span>.<span yellow>indexadorPopus</span>()
                        </div>
                      </div>
                      },
                      <br>
                      methods: {
                      <div class="border-left">
                        <div recuo>
                          <span yellow>indexadorPopus</span>() {
                          <div class="border-left">
                            <div recuo>
                              <span green>//INDEXA TODOS POPUPS CRIADOS NO HMTL</span> <br>
                              <span blue>const</span> <span blue2>$arrayPopups</span> = document.<span
                                yellow>querySelectorAll</span>(<span brown>'dm-popup'</span>) <br>
                              <span blue>const</span> <span blue2>$arraysButtons</span> = document.<span
                                yellow>querySelectorAll</span>(<span brown>'dm-button-popup'</span>)<br>
                              <span roxo>for</span> (let <span blue2>i</span> = <span green>0</span>; $arrayPopups.length
                              >
                              <span blue2>i</span>; <span blue2>i</span>++) {
                              <div class="border-left">
                                <div recuo>
                                  <span blue2>$arrayPopups</span>[i].style.display = <span brown>'none'</span> <br>
                                  <span blue2>$arrayPopups</span>[i].<span yellow>setAttribute</span>(<span
                                    brown>'popupid'</span>, `${<span blue2>i</span>}`) <br>
                                  <span blue2>$arraysButtons</span>[i].<span yellow>setAttribute</span>(<span
                                    brown>'popupbutton'</span>, `${<span blue2>i</span>}`)
                                </div>
                              </div>
                              }
                            </div>
                          </div>
                          },
                          <br>
                          <span yellow>popup</span>(event) {
                          <div class="border-left">
                            <div recuo>
                              <span green>//ABRE POPUP CLICADO</span>
                              <br>
                              <span blue>const $body</span> = document.<span yellow>querySelector</span>(<span
                                brown>'body'</span>)
                              <br>
                              <span roxo>if</span> (<span blue>this</span>.upPopup === <span blue>false</span>) {
                              <div class="border-left">
                                <div recuo>
                                  <span blue>$body</span>.style.overflow = <span brown>'hidden'</span> <br>
                                  <span blue>this</span>.idPopup = event.target.getAttribute('popupbutton')<br>
                                  <span blue>this</span>.upPopup = <span blue>!this</span>.upPopup <br>
                                  document.<span yellow>querySelector</span>(`[popupid="${<span
                                    blue>this</span>.idPopup}"]`).style.display = <span brown>'flex'</span>
                                </div>
                              </div>
                              }
                              <br>
                              <span green>//COMPARA OS OBJETOS CLICADOS QUE PODEM FECHAR O POPUP</span>
                              <br>
                              <span roxo>else if</span> (event.target.getAttribute('popup') == <span brown>'close'</span>)
                              {
                              <div class="border-left">
                                <div recuo>
                                  <span blue>$body</span>.style.overflow = <span brown>'auto'</span> <br>
                                  <span blue>this</span>.upPopup = <span blue>!this</span>.upPopup<br>
                                  document.<span yellow>querySelector</span>(`[popupid="${<span
                                    blue>this</span>.idPopup}"]`).style.display = <span brown>'none'</span>
                                </div>
                              </div>
                              }
                            </div>
                          </div>
                          }
                        </div>
                      </div>
                      },
                    </div>
                  </div>
                  },
                  <br>
                  &#60;/<span tagColor>script</span>&#62;
                </div>


              </el-collapse-item>
            </el-collapse>
          </div>
          <div class="cont-elements">
            <img class="imagemExemplo" src="mensagens/alert_03.jpg">
            <br>
            <br>
            <div style="display: flex; gap: 20px;">

              <dm-popup-background>
                <dm-icon CorrectGreen />
                <p>Rotas e romaneios remanejados com sucesso!</p>
                <el-row>
                  <dm-button class="el-button el-button--primario" popup="close">Ok</dm-button>
                </el-row>
              </dm-popup-background>

              <!--  -->

              <dm-popup @click="popup" popup="close">
                <dm-popup-background>
                  <dm-icon CorrectGreen />
                  <p>Rotas e romaneios remanejados com sucesso!</p>
                  <el-row>
                    <dm-button class="el-button el-button--primario" popup="close">Ok</dm-button>
                  </el-row>
                </dm-popup-background>
              </dm-popup>

              <dm-button-popup @click="popup" popup="close" class="el-button el-button--primario">Ver</dm-button-popup>
            </div>
            <br>
            <el-collapse v-model="activeids" @change="handleChange">
              <el-collapse-item title="Ver código">
                <div class="html_codigos">
                  &#60;<span tagColor>template</span>&#62;
                  <div class="border-left">
                    <div recuo>
                      &#60;<span tagColor>dm-popup</span> @click=<span roxo>"popup"</span> popup=<span
                        roxo>"close"</span>&#62;
                      <div class="border-left">
                        <div recuo>
                          &#60;<span tagColor>dm-popup-background</span>&#62;
                          <div class="border-left">
                            <div recuo>
                              &#60;<span tagColor>dm-icon</span> <span roxo>CorrectGreen</span> /&#62;<br>
                              &#60;<span tagColor>p</span>&#62;<span black>Rotas e romaneios remanejados com
                                sucesso!</span>&#60;/<span tagColor>p</span>&#62;<br>
                              <br>
                              &#60;<span tagColor>el-row</span>&#62;<br>
                              <border-left>
                                <div class="border-left">
                                  <div recuo>
                                    &#60;<span tagColor>dm-button</span> class=<span roxo>"el-button
                                      el-button--primario"</span>
                                    popup=<span roxo>"close"</span>&#62;<span black>Ok</span>&#60;/<span
                                      tagColor>dm-button</span>&#62;<br>
                                  </div>
                                </div>
                              </border-left>
                              &#60;/<span tagColor>el-row</span>&#62;
                            </div>
                          </div>
                          &#60;/<span tagColor>dm-popup-background</span>&#62;
                        </div>
                      </div>
                      &#60;/<span tagColor>dm-popup</span>&#62;
                      <br>
                      &#60;<span tagColor>dm-button-popup</span>
                      <div class="border-left">
                        <div recuo>
                          @click="<span yellow>popup</span>"
                          <br> popup=<span roxo>"close"</span>
                          <br>class=<span roxo>"el-button el-button--primario"</span>&#62;<span black>
                            <div class="border-left">
                              <div recuo>Ver</div>
                            </div>
                          </span>
                        </div>
                      </div>
                      &#60;/<span tagColor>dm-button-popup</span>&#62;
                    </div>
                  </div>
                  &#60;/<span tagColor>template</span>&#62;
                </div>
                <br>
                <br>
                <div class="html_codigos">
                  &#60;<span tagColor>script</span>&#62;
                  <br>
                  <span roxo>export default</span> {
                  <div class="border-left">
                    <div recuo>
                      data() {
                      <div class="border-left">
                        <div recuo>
                          <span roxo>return</span>{
                          <div class="border-left">
                            <div recuo>
                              upPopup: <span blue>false</span>, <br>
                              idPopup: <span blue>null</span>,
                            </div>
                          </div>
                          }
                        </div>
                      </div>
                      },
                      <br>
                      mounted() {
                      <div class="border-left">
                        <div recuo>
                          <span blue>this</span>.<span yellow>indexadorPopus</span>()
                        </div>
                      </div>
                      },
                      <br>
                      methods: {
                      <div class="border-left">
                        <div recuo>
                          <span yellow>indexadorPopus</span>() {
                          <div class="border-left">
                            <div recuo>
                              <span green>//INDEXA TODOS POPUPS CRIADOS NO HMTL</span> <br>
                              <span blue>const</span> <span blue2>$arrayPopups</span> = document.<span
                                yellow>querySelectorAll</span>(<span brown>'dm-popup'</span>) <br>
                              <span blue>const</span> <span blue2>$arraysButtons</span> = document.<span
                                yellow>querySelectorAll</span>(<span brown>'dm-button-popup'</span>)<br>
                              <span roxo>for</span> (let <span blue2>i</span> = <span green>0</span>; $arrayPopups.length
                              &#62;
                              <span blue2>i</span>; <span blue2>i</span>++) {
                              <div class="border-left">
                                <div recuo>
                                  <span blue2>$arrayPopups</span>[i].style.display = <span brown>'none'</span> <br>
                                  <span blue2>$arrayPopups</span>[i].<span yellow>setAttribute</span>(<span
                                    brown>'popupid'</span>, `${<span blue2>i</span>}`) <br>
                                  <span blue2>$arraysButtons</span>[i].<span yellow>setAttribute</span>(<span
                                    brown>'popupbutton'</span>, `${<span blue2>i</span>}`)
                                </div>
                              </div>
                              }
                            </div>
                          </div>
                          },
                          <br>
                          <span yellow>popup</span>(event) {
                          <div class="border-left">
                            <div recuo>
                              <span green>//ABRE POPUP CLICADO</span> <br>

                              <span blue>const $body</span> = document.<span yellow>querySelector</span>(<span
                                brown>'body'</span>)
                              <br>
                              <span roxo>if</span> (<span blue>this</span>.upPopup === <span blue>false</span>) {
                              <div class="border-left">
                                <div recuo>
                                  <span blue>this</span>.idPopup = event.target.getAttribute(<span
                                    brown>'popupbutton'</span>)<br>
                                  <span blue>$body</span>.style.overflow = <span brown>'hidden'</span>
                                  <br>
                                  <span blue>this</span>.upPopup = <span blue>!this</span>.upPopup <br>
                                  document.<span yellow>querySelector</span>(`[popupid="${<span
                                    blue>this</span>.idPopup}"]`).style.display = <span brown>'flex'</span>
                                </div>
                              </div>
                              }
                              <br>
                              <span green>//COMPARA OS OBJETOS CLICADOS QUE PODEM FECHAR O POPUP</span>
                              <br>
                              <span roxo>else if</span> (event.target.getAttribute('popup') == <span brown>'close'</span>)
                              {
                              <div class="border-left">
                                <div recuo>
                                  <span blue>$body</span>.style.overflow = <span brown>'auto'</span> <br>
                                  <span blue>this</span>.upPopup = <span blue>!this</span>.upPopup<br>
                                  document.<span yellow>querySelector</span>(`[popupid="${<span
                                    blue>this</span>.idPopup}"]`).style.display = <span brown>'none'</span>
                                </div>
                              </div>
                              }
                            </div>
                          </div>
                          }
                        </div>
                      </div>
                      },
                    </div>
                  </div>
                  },
                  <br>
                  &#60;/<span tagColor>script</span>&#62;
                </div>
              </el-collapse-item>
            </el-collapse>
          </div>
          <h3>Aviso informativo</h3>
          <br>
          <div class="cont-elements">
            <p>Avisos informativos comunicam informações importantes ou sugerem conteúdos informativos ao usuário.</p>
            <br>
            <img class="imagemExemplo" src="mensagens/informativo.jpg">
            <br>
            <br>
            <dm-information>
              <dm-icon Lamp />
              <span>
                <p>Para saber como construir a tabela de acordo com o padrão, </p>
                <el-button type="terciario">baixe o nosso modelo</el-button>
              </span>
            </dm-information>
            <br>
            <el-collapse v-model="activeids" @change="handleChange">
              <el-collapse-item title="Ver código">
                <div class="html_codigos">
                  &#60;<span tagColor>dm-information</span>&#62;
                  <div class="border-left">
                    <div recuo>
                      &#60;<span tagColor>dm-icon</span> <span roxo>Lamp</span> /&#62;<br>
                      &#60;<span tagColor>span</span>&#62;
                      <br>
                      &#60;<span tagColor>p</span>&#62;
                      <br>
                      <div class="border-left">
                        <div recuo>
                          <span black>Para saber como construir a tabela de acordo com o padrão,<br>
                          </span> &#60;/<span tagColor>p</span>&#62; <br>
                          &#60;<span tagColor>el-button</span> type=<span roxo>"terciario"</span>&#62;<span black>baixe o
                            nosso modelo</span>&#60;/<span roxo>el-button</span>&#62;
                        </div>
                      </div>
                      &#60;/<span tagColor>span</span>&#62;
                    </div>
                  </div>
                  &#60;/<span tagColor>dm-information</span>&#62;
                </div>
              </el-collapse-item>
            </el-collapse>
          </div>
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import HeaderDs from "../../components/HeaderDs.vue";
export default {
  name: "MensagensDs",
  components: {
    HeaderDs,
  },
  data() {
    var checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('Please input the age'));
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error('Please input digits'));
        } else {
          if (value < 18) {
            callback(new Error('Age must be greater than 18'));
          } else {
            callback();
          }
        }
      }, 1000);
    };
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('Please input the password'));
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass');
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('Please input the password again'));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error('Two inputs don\'t match!'));
      } else {
        callback();
      }
    };
    return {
      alertDm: false,
      upPopup: false,
      idPopup: null,
      ruleForm: {
        pass: '',
        checkPass: '',
        age: ''
      },
      rules: {
        pass: [
          { validator: validatePass, trigger: 'blur' }
        ],
        checkPass: [
          { validator: validatePass2, trigger: 'blur' }
        ],
        age: [
          { validator: checkAge, trigger: 'blur' }
        ]
      },
      headerTitle: "Mensagens",
    };
  },
  mounted() {
    this.indexadorPopus()
  },
  methods: {
    upAlert() {
      if (this.alertDm == false) {
        this.alertDm = true
        setTimeout(() => {
          this.alertDm = false
        }, 5000)
      } else if (this.alertDm == true) {
        this.alertDm = this.alertDm = false
      }
    },
    indexadorPopus() {
      //INDEXA TODOS POPUPS CRIADOS NO HMTL
      const $arrayPopups = document.querySelectorAll('dm-popup')
      const $arraysButtons = document.querySelectorAll('dm-button-popup')
      for (let i = 0; $arrayPopups.length > i; i++) {
        $arrayPopups[i].style.display = 'none'
        $arrayPopups[i].setAttribute('popupid', `${i}`)
        $arraysButtons[i].setAttribute('popupbutton', `${i}`)
      }
    },
    popup(event) {
      //ABRE POPUP CLICADO
      const $body = document.querySelector('body')
      if (this.upPopup === false) {
        this.idPopup = event.target.getAttribute('popupbutton')
        $body.style.overflow = 'hidden'
        this.upPopup = !this.upPopup
        document.querySelector(`[popupid="${this.idPopup}"]`).style.display = 'flex'
      }
      //COMPARA OS OBJETOS CLICADOS QUE PODEM FECHAR O POPUP
      else if (event.target.getAttribute('popup') == 'close') {
        $body.style.overflow = 'auto'
        this.upPopup = !this.upPopup
        document.querySelector(`[popupid="${this.idPopup}"]`).style.display = 'none'
      }
    }
  },
  submitForm(formName) {
    this.$refs[formName].validate((valid) => {
      if (valid) {
        alert('submit!');
      } else {
        console.log('error submit!!');
        return false;
      }
    });
  },
  resetForm(formName) {
    this.$refs[formName].resetFields();
  },
  hello() {
    alert('Hellow World!')
  },
};
</script>

<style scoped>
.imagemExemplo {
  width: 100%;
  border-radius: 6px;
}
</style>