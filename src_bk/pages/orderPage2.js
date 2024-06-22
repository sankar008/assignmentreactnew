<div className={`row justify-content-center mt-5  ${showSignUpSection6 === false ? 'hide' : ''}`}>
                  <div className="col-lg-8">
                    <div className="order_header"></div>
                    <h3 className="order_header_titel">Duration</h3>
                  </div>

                  <div className="col-md-7">
                    <div className="rang_toper">
                      <div className="icon_with_timer">
                        <img src="./images/stopwatch.png"></img>
                        <span>
                          <strong> {getRangeDate}</strong> Min
                        </span>
                      </div>
                      <div className="icon_with_timer">
                        <img src="./images/question.png"></img>
                        <span>
                          <strong> 2-3 </strong> Questions
                        </span>
                      </div>
                    </div>
                    <div className="rang_body">
                      <input type="range" id="ranger" min="0" max="210"

                        value={getRangeDate}
                        onChange={(e) => setGetRangeDate(e.target.value)}
                        step="5"></input>
                    </div>
                    <div className="rang_value">
                      <span>0</span>
                      <span>30</span>
                      <span>60</span>
                      <span>90</span>
                      <span>120</span>
                      <span>150</span>
                      <span>180</span>
                      <span>210</span>
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="step_buttn">
                      <button class="continue_btn" onClick={visibaleSection7}>
                        Continue
                      </button>
                    </div>
                  </div>
                </div>