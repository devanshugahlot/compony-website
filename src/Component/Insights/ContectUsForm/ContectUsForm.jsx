import React from 'react'
import './ContectUsForm.css'

const ContectUsForm = () => {
    return (
        <>
            <div className='Contact-Us-Form'>


                <div className=" popup-form-1 "   >
                    <div className="modal-dialog model_full_width" role="document">
                        <div className="modal-content model_full_width_content">
                            <div className="modal-body">
                                <div className="row popup_cus_row">
                                    <div className="col-lg-5 p-lg-0">
                                        <div className="popup_form_left_sec">
                                            {/* <h3>Radhe Radhe</h3> */}
                                        </div>
                                    </div>
                                    <div className="col-lg-7 col-12">
                                        <div className="popup-contact-form">
                                            <p className="title-14 text-center" id="myModalLabel"><span className="christ_tit"></span>Contact Us</p>
                                            {/* <p className="contents1">Let's sky-rocket your dream Project together</p> */}
                                            <form className="fitoutform-1" id="popup_contact_form_home_new" method="post">
                                                <input type="hidden" name="offer_percent" id="offer_percent" />
                                                <div className="row">
                                                    <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group">
                                                        <input type="text" className="form-control" name="contact_name" placeholder="Enter Your Name" />
                                                    </div>
                                                    <input type="hidden" className="form-control" defaultValue="popup_form_blog" name="category_name" />
                                                    <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group">
                                                        <input type="text" className="form-control" name="email" placeholder="Enter Your Email" />
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group">
                                                        <div className="selecpicker_input_group_div">
                                                            <select className="selectpicker form-control select_icon_list" name="social_link_type" aria-label="Contact Details">
                                                                <option data-icon="fa fa-phone" value="mobile" />
                                                                <option data-icon="fab fa-whatsapp" value="whatsapp" />
                                                                <option data-icon="fab fa-telegram" value="telegram" />
                                                            </select>
                                                            <input type="tel" name="mobile" placeholder="Your Phone Number" className="telephone" />
                                                            <input type="hidden" name="social_link_type_hidden" defaultValue="mobile" />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group">
                                                        <div className="popup_country">
                                                            <input className="form-control" placeholder='enter sponser id' name="category_name" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-lg-12 form-group msg_div">
                                                        <textarea name="message" className="form-control" rows={3} id="msg" placeholder="Enter your subject" defaultValue={""} />
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-lg-12 form-group text-center">
                                                        <div id="popup_error_msg_home" />
                                                        <button className="btn home_popup_submit" type="Submit" >Submit</button>
                                                    </div>
                                                </div>
                                            </form>
                                            <p className="btm_contents">Protecting your data is our #1 priority; your information is safe with us.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='down-box-Contact-form'>
                    <div className="center-down-box">


                        <div className="contact_details_mbl">
                            <div className="contact_form_new">
                                <div className="contact_info">
                                    <div className="title-14">We're One Tap Away!</div>
                                    <div className="contents">Connect with us</div>
                                    <div className="s-info">
                                        <div className="contact-info top-info">
                                            <div className="phone-info">
                                                <a href="https://api.whatsapp.com/send?phone=919442164852&text=Hi,%20I%20need%20more%20details%20about%20Osiz%20software%20development%20services.%20Shall%20we%20discuss%20now?%20-%20https://www.osiztechnologies.com/contact-us" target="_blank"><i className="fab fa-whatsapp" aria-hidden="true" /> +91
                                                    9442164852</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="s-info">
                                        <div className="contact-info">
                                            <div className="phone-info">
                                                <a href="https://telegram.me/Osiz_Tech" target="_blank"> <i className="fab fa-telegram" /> t.me/Osiz_Tech</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="s-info">
                                        <div className="contact-info">
                                            <div className="phone-info">
                                                <a href="https://join.skype.com/invite/lAF0IYo03Kfu" target="_blank"> <i className="fab fa-skype" /> live:osiztechonologies</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="s-info">
                                        <div className="contact-info top-info">
                                            <div className="phone-info">
                                                <a href="tel:+91 9442164852"><i className="fa fa-phone" /> +91 9442164852 </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="s-info">
                                        <div className="contact-info">
                                            <div className="phone-info">
                                                <a href="mailto:sales@osiztechnologies.com" target="_blank"> <i className="fa fa-envelope" /> sales@osiztechnologies.com</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="c-social">
                                         <div class="phone-info">
                                            <div class="sub_title">Follow us on</div>
                                          </div>
                                          <ul>
                                              <li><a href="https://www.facebook.com/Osiztechnologiespvtltd/" class="facebook" target="_blank"><i class="fab fa-facebook"></i></a></li>
                                              <li><a href="https://twitter.com/osiztech?lang=en" class="twitter" target="_blank"><i class="fab fa-twitter"></i></a></li>
                                              <li><a href="https://in.linkedin.com/company/osiz-technologies-private-limited" class="linkedin" target="_blank"><i class="fab fa-linkedin"></i></a></li>
                                              <li><a href="https://www.youtube.com/channel/UCoAA-CuoRY0K7OEaj-Awa3w/?sub_confirmation=1" class="youtube" target="_blank"><i class="fab fa-youtube"></i></a></li>
                                              <li><a href="https://in.pinterest.com/osiztechnologiespvtltd/" class="pinterest" target="_blank"><i class="fab fa-pinterest"></i></a></li>
                                              <li><a href="https://www.instagram.com/osiztechnologiespvtltd/" class="instagram" target="_blank"><i class="fab fa-instagram"></i></a></li>
                                          </ul>
                                      </div>
                                </div>
                            </div>
                        </div>
                        <div className='Contact-form-map'>
                            <iframe  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14243.137300960216!2d75.79528355000001!3d26.81499515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1704705913184!5m2!1sen!2sin"  allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />

                        </div>
                    </div>
                </div>


            </div>


        </>
    )
}

export default ContectUsForm
