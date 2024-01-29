import React from "react";
import "./DynamicWebsite.css";
import SimilarFile from "../SimilarFile";
const DynamicWebsite = () => {
    return (
        <div>
        &lt;&gt;
        <header className="ondemad_head">
          <div className="container h-100">
            <div className="row h-100 justify-content-center align-items-center">
              {/* <div class="text-left header-content col-lg-12 mt-9">
      
        <h1 class="mb-5 desktop" style="text-align: left;">On-Demand App Development <br> Company </h1>
        <h1 class="mb-5 mobile" style="text-align: left;">On-Demand App Development Company </h1>
      
        </div> */}
              <div className="col-lg-12 my-auto">
                <div className="header-content mx-auto">
                  <h1 className="mb-5 mt-0 desktop" style={{textAlign: 'left'}}>On-Demand App Development <br /> Company </h1>
                  {/*  <h1 class="mb-5 mobile" style="text-align: left;">On-Demand App Development Company </h1> */}
                  <h3 className="text-left heading-tagline">Digitize your product to expand the business online and reach millions of users worldwide. We help you craft your on-demand application to perfection with our vast library of customization tools &amp; designs. Collaborate with our
                    team and choose your desirable module to utilize our finest on-demand app development services. </h3>
                  <ul className="banr-listing">
                    <li><i className="fa fa-check-circle" /> Meticulous quality analysis cycle.</li>
                    <li><i className="fa fa-check-circle" /> Apps built on leading-edge software packages.</li>
                    <li><i className="fa fa-check-circle" /> Incorporation of authentic API tools.</li>
                    <li><i className="fa fa-check-circle" /> Exclusive Offshore project development team.</li>
                    <li><i className="fa fa-check-circle" /> On-time delivery at an affordable cost.</li>
                  </ul>
                </div>
              </div>
              {/* <div class="col-lg-5">
            <div class="ondemand_app_banner_form_sec">
              <div class="ondemand_app_banner_form_head text-center">
                <h3 class="title">Tell Us Your Requirements</h3>
                <p>What you expect of our on-demand app solution.</p>
              </div>
              <form class="ondemad_app_banner_form" id="ondemad_app_banner_form" method="post">
                <input type="hidden" name="category_name" value="Contact-form-on-demand-app-development">
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <input type="text" class="form-control" placeholder="Name" name="contact_name">
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <input type="email" class="form-control" placeholder="Email" name="email">
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <select class="form-control" name="country">
      
                        
                            <option value="" hidden>Choose Country</option>
                                                            <option value="Afghanistan" id='AF' >Afghanistan</option>
                                                                <option value="Albania" id='AL' >Albania</option>
                                                                <option value="Algeria" id='DZ' >Algeria</option>
                                                                <option value="American Samoa" id='AS' >American Samoa</option>
                                                                <option value="Andorra" id='AD' >Andorra</option>
                                                                <option value="Angola" id='AO' >Angola</option>
                                                                <option value="Anguilla" id='AI' >Anguilla</option>
                                                                <option value="Antarctica" id='AQ' >Antarctica</option>
                                                                <option value="Antigua and Barbuda" id='AG' >Antigua and Barbuda</option>
                                                                <option value="Argentina" id='AR' >Argentina</option>
                                                                <option value="Armenia" id='AM' >Armenia</option>
                                                                <option value="Aruba" id='AW' >Aruba</option>
                                                                <option value="Australia" id='AU' >Australia</option>
                                                                <option value="Austria" id='AT' >Austria</option>
                                                                <option value="Azerbaijan" id='AZ' >Azerbaijan</option>
                                                                <option value="Bahamas" id='BS' >Bahamas</option>
                                                                <option value="Bahrain" id='BH' >Bahrain</option>
                                                                <option value="Bangladesh" id='BD' >Bangladesh</option>
                                                                <option value="Barbados" id='BB' >Barbados</option>
                                                                <option value="Belarus" id='BY' >Belarus</option>
                                                                <option value="Belgium" id='BE' >Belgium</option>
                                                                <option value="Belize" id='BZ' >Belize</option>
                                                                <option value="Benin" id='BJ' >Benin</option>
                                                                <option value="Bermuda" id='BM' >Bermuda</option>
                                                                <option value="Bhutan" id='BT' >Bhutan</option>
                                                                <option value="Bolivia" id='BO' >Bolivia</option>
                                                                <option value="Bosnia and Herzegovina" id='BA' >Bosnia and Herzegovina</option>
                                                                <option value="Botswana" id='BW' >Botswana</option>
                                                                <option value="Bouvet Island" id='BV' >Bouvet Island</option>
                                                                <option value="Brazil" id='BR' >Brazil</option>
                                                                <option value="British Indian Ocean Territory" id='IO' >British Indian Ocean Territory</option>
                                                                <option value="Brunei Darussalam" id='BN' >Brunei Darussalam</option>
                                                                <option value="Bulgaria" id='BG' >Bulgaria</option>
                                                                <option value="Burkina Faso" id='BF' >Burkina Faso</option>
                                                                <option value="Burundi" id='BI' >Burundi</option>
                                                                <option value="Cambodia" id='KH' >Cambodia</option>
                                                                <option value="Cameroon" id='CM' >Cameroon</option>
                                                                <option value="Canada" id='CA' >Canada</option>
                                                                <option value="Cape Verde" id='CV' >Cape Verde</option>
                                                                <option value="Cayman Islands" id='KY' >Cayman Islands</option>
                                                                <option value="Central African Republic" id='CF' >Central African Republic</option>
                                                                <option value="Chad" id='TD' >Chad</option>
                                                                <option value="Chile" id='CL' >Chile</option>
                                                                <option value="China" id='CN' >China</option>
                                                                <option value="Christmas Island" id='CX' >Christmas Island</option>
                                                                <option value="Cocos (Keeling) Islands" id='CC' >Cocos (Keeling) Islands</option>
                                                                <option value="Colombia" id='CO' >Colombia</option>
                                                                <option value="Comoros" id='KM' >Comoros</option>
                                                                <option value="Congo" id='CG' >Congo</option>
                                                                <option value="Congo, the Democratic Republic of the" id='CD' >Congo, the Democratic Republic of the</option>
                                                                <option value="Cook Islands" id='CK' >Cook Islands</option>
                                                                <option value="Costa Rica" id='CR' >Costa Rica</option>
                                                                <option value="Cote D'Ivoire" id='CI' >Cote D'Ivoire</option>
                                                                <option value="Croatia" id='HR' >Croatia</option>
                                                                <option value="Cuba" id='CU' >Cuba</option>
                                                                <option value="Cyprus" id='CY' >Cyprus</option>
                                                                <option value="Czech Republic" id='CZ' >Czech Republic</option>
                                                                <option value="Denmark" id='DK' >Denmark</option>
                                                                <option value="Djibouti" id='DJ' >Djibouti</option>
                                                                <option value="Dominica" id='DM' >Dominica</option>
                                                                <option value="Dominican Republic" id='DO' >Dominican Republic</option>
                                                                <option value="Ecuador" id='EC' >Ecuador</option>
                                                                <option value="Egypt" id='EG' >Egypt</option>
                                                                <option value="El Salvador" id='SV' >El Salvador</option>
                                                                <option value="Equatorial Guinea" id='GQ' >Equatorial Guinea</option>
                                                                <option value="Eritrea" id='ER' >Eritrea</option>
                                                                <option value="Estonia" id='EE' >Estonia</option>
                                                                <option value="Ethiopia" id='ET' >Ethiopia</option>
                                                                <option value="Falkland Islands (Malvinas)" id='FK' >Falkland Islands (Malvinas)</option>
                                                                <option value="Faroe Islands" id='FO' >Faroe Islands</option>
                                                                <option value="Fiji" id='FJ' >Fiji</option>
                                                                <option value="Finland" id='FI' >Finland</option>
                                                                <option value="France" id='FR' >France</option>
                                                                <option value="French Guiana" id='GF' >French Guiana</option>
                                                                <option value="French Polynesia" id='PF' >French Polynesia</option>
                                                                <option value="French Southern Territories" id='TF' >French Southern Territories</option>
                                                                <option value="Gabon" id='GA' >Gabon</option>
                                                                <option value="Gambia" id='GM' >Gambia</option>
                                                                <option value="Georgia" id='GE' >Georgia</option>
                                                                <option value="Germany" id='DE' >Germany</option>
                                                                <option value="Ghana" id='GH' >Ghana</option>
                                                                <option value="Gibraltar" id='GI' >Gibraltar</option>
                                                                <option value="Greece" id='GR' >Greece</option>
                                                                <option value="Greenland" id='GL' >Greenland</option>
                                                                <option value="Grenada" id='GD' >Grenada</option>
                                                                <option value="Guadeloupe" id='GP' >Guadeloupe</option>
                                                                <option value="Guam" id='GU' >Guam</option>
                                                                <option value="Guatemala" id='GT' >Guatemala</option>
                                                                <option value="Guinea" id='GN' >Guinea</option>
                                                                <option value="Guinea-Bissau" id='GW' >Guinea-Bissau</option>
                                                                <option value="Guyana" id='GY' >Guyana</option>
                                                                <option value="Haiti" id='HT' >Haiti</option>
                                                                <option value="Heard Island and Mcdonald Islands" id='HM' >Heard Island and Mcdonald Islands</option>
                                                                <option value="Holy See (Vatican City State)" id='VA' >Holy See (Vatican City State)</option>
                                                                <option value="Honduras" id='HN' >Honduras</option>
                                                                <option value="Hong Kong" id='HK' >Hong Kong</option>
                                                                <option value="Hungary" id='HU' >Hungary</option>
                                                                <option value="Iceland" id='IS' >Iceland</option>
                                                                <option value="India" id='IN' >India</option>
                                                                <option value="Indonesia" id='ID' >Indonesia</option>
                                                                <option value="Iran, Islamic Republic of" id='IR' >Iran, Islamic Republic of</option>
                                                                <option value="Iraq" id='IQ' >Iraq</option>
                                                                <option value="Ireland" id='IE' >Ireland</option>
                                                                <option value="Israel" id='IL' >Israel</option>
                                                                <option value="Italy" id='IT' >Italy</option>
                                                                <option value="Jamaica" id='JM' >Jamaica</option>
                                                                <option value="Japan" id='JP' >Japan</option>
                                                                <option value="Jordan" id='JO' >Jordan</option>
                                                                <option value="Kazakhstan" id='KZ' >Kazakhstan</option>
                                                                <option value="Kenya" id='KE' >Kenya</option>
                                                                <option value="Kiribati" id='KI' >Kiribati</option>
                                                                <option value="North Korea" id='KP' >North Korea</option>
                                                                <option value="South Korea" id='KR' >South Korea</option>
                                                                <option value="Kuwait" id='KW' >Kuwait</option>
                                                                <option value="Kyrgyzstan" id='KG' >Kyrgyzstan</option>
                                                                <option value="Lao People's Democratic Republic" id='LA' >Lao People's Democratic Republic</option>
                                                                <option value="Latvia" id='LV' >Latvia</option>
                                                                <option value="Lebanon" id='LB' >Lebanon</option>
                                                                <option value="Lesotho" id='LS' >Lesotho</option>
                                                                <option value="Liberia" id='LR' >Liberia</option>
                                                                <option value="Libyan Arab Jamahiriya" id='LY' >Libyan Arab Jamahiriya</option>
                                                                <option value="Liechtenstein" id='LI' >Liechtenstein</option>
                                                                <option value="Lithuania" id='LT' >Lithuania</option>
                                                                <option value="Luxembourg" id='LU' >Luxembourg</option>
                                                                <option value="Macao" id='MO' >Macao</option>
                                                                <option value="Macedonia, the Former Yugoslav Republic of" id='MK' >Macedonia, the Former Yugoslav Republic of</option>
                                                                <option value="Madagascar" id='MG' >Madagascar</option>
                                                                <option value="Malawi" id='MW' >Malawi</option>
                                                                <option value="Malaysia" id='MY' >Malaysia</option>
                                                                <option value="Maldives" id='MV' >Maldives</option>
                                                                <option value="Mali" id='ML' >Mali</option>
                                                                <option value="Malta" id='MT' >Malta</option>
                                                                <option value="Marshall Islands" id='MH' >Marshall Islands</option>
                                                                <option value="Martinique" id='MQ' >Martinique</option>
                                                                <option value="Mauritania" id='MR' >Mauritania</option>
                                                                <option value="Mauritius" id='MU' >Mauritius</option>
                                                                <option value="Mayotte" id='YT' >Mayotte</option>
                                                                <option value="Mexico" id='MX' >Mexico</option>
                                                                <option value="Micronesia, Federated States of" id='FM' >Micronesia, Federated States of</option>
                                                                <option value="Moldova, Republic of" id='MD' >Moldova, Republic of</option>
                                                                <option value="Monaco" id='MC' >Monaco</option>
                                                                <option value="Mongolia" id='MN' >Mongolia</option>
                                                                <option value="Montserrat" id='MS' >Montserrat</option>
                                                                <option value="Morocco" id='MA' >Morocco</option>
                                                                <option value="Mozambique" id='MZ' >Mozambique</option>
                                                                <option value="Myanmar" id='MM' >Myanmar</option>
                                                                <option value="Namibia" id='NA' >Namibia</option>
                                                                <option value="Nauru" id='NR' >Nauru</option>
                                                                <option value="Nepal" id='NP' >Nepal</option>
                                                                <option value="Netherlands" id='NL' >Netherlands</option>
                                                                <option value="Netherlands Antilles" id='AN' >Netherlands Antilles</option>
                                                                <option value="New Caledonia" id='NC' >New Caledonia</option>
                                                                <option value="New Zealand" id='NZ' >New Zealand</option>
                                                                <option value="Nicaragua" id='NI' >Nicaragua</option>
                                                                <option value="Niger" id='NE' >Niger</option>
                                                                <option value="Nigeria" id='NG' >Nigeria</option>
                                                                <option value="Niue" id='NU' >Niue</option>
                                                                <option value="Norfolk Island" id='NF' >Norfolk Island</option>
                                                                <option value="Northern Mariana Islands" id='MP' >Northern Mariana Islands</option>
                                                                <option value="Norway" id='NO' >Norway</option>
                                                                <option value="Oman" id='OM' >Oman</option>
                                                                <option value="Pakistan" id='PK' >Pakistan</option>
                                                                <option value="Palau" id='PW' >Palau</option>
                                                                <option value="Palestinian Territory, Occupied" id='PS' >Palestinian Territory, Occupied</option>
                                                                <option value="Panama" id='PA' >Panama</option>
                                                                <option value="Papua New Guinea" id='PG' >Papua New Guinea</option>
                                                                <option value="Paraguay" id='PY' >Paraguay</option>
                                                                <option value="Peru" id='PE' >Peru</option>
                                                                <option value="Philippines" id='PH' >Philippines</option>
                                                                <option value="Pitcairn" id='PN' >Pitcairn</option>
                                                                <option value="Poland" id='PL' >Poland</option>
                                                                <option value="Portugal" id='PT' >Portugal</option>
                                                                <option value="Puerto Rico" id='PR' >Puerto Rico</option>
                                                                <option value="Qatar" id='QA' >Qatar</option>
                                                                <option value="Reunion" id='RE' >Reunion</option>
                                                                <option value="Romania" id='RO' >Romania</option>
                                                                <option value="Russian Federation" id='RU' >Russian Federation</option>
                                                                <option value="Rwanda" id='RW' >Rwanda</option>
                                                                <option value="Saint Helena" id='SH' >Saint Helena</option>
                                                                <option value="Saint Kitts and Nevis" id='KN' >Saint Kitts and Nevis</option>
                                                                <option value="Saint Lucia" id='LC' >Saint Lucia</option>
                                                                <option value="Saint Pierre and Miquelon" id='PM' >Saint Pierre and Miquelon</option>
                                                                <option value="Saint Vincent and the Grenadines" id='VC' >Saint Vincent and the Grenadines</option>
                                                                <option value="Samoa" id='WS' >Samoa</option>
                                                                <option value="San Marino" id='SM' >San Marino</option>
                                                                <option value="Sao Tome and Principe" id='ST' >Sao Tome and Principe</option>
                                                                <option value="Saudi Arabia" id='SA' >Saudi Arabia</option>
                                                                <option value="Senegal" id='SN' >Senegal</option>
                                                                <option value="Serbia and Montenegro" id='CS' >Serbia and Montenegro</option>
                                                                <option value="Seychelles" id='SC' >Seychelles</option>
                                                                <option value="Sierra Leone" id='SL' >Sierra Leone</option>
                                                                <option value="Singapore" id='SG' >Singapore</option>
                                                                <option value="Slovakia" id='SK' >Slovakia</option>
                                                                <option value="Slovenia" id='SI' >Slovenia</option>
                                                                <option value="Solomon Islands" id='SB' >Solomon Islands</option>
                                                                <option value="Somalia" id='SO' >Somalia</option>
                                                                <option value="South Africa" id='ZA' >South Africa</option>
                                                                <option value="South Georgia and the South Sandwich Islands" id='GS' >South Georgia and the South Sandwich Islands</option>
                                                                <option value="Spain" id='ES' >Spain</option>
                                                                <option value="Sri Lanka" id='LK' >Sri Lanka</option>
                                                                <option value="Sudan" id='SD' >Sudan</option>
                                                                <option value="Suriname" id='SR' >Suriname</option>
                                                                <option value="Svalbard and Jan Mayen" id='SJ' >Svalbard and Jan Mayen</option>
                                                                <option value="Swaziland" id='SZ' >Swaziland</option>
                                                                <option value="Sweden" id='SE' >Sweden</option>
                                                                <option value="Switzerland" id='CH' >Switzerland</option>
                                                                <option value="Syrian Arab Republic" id='SY' >Syrian Arab Republic</option>
                                                                <option value="Taiwan, Province of China" id='TW' >Taiwan, Province of China</option>
                                                                <option value="Tajikistan" id='TJ' >Tajikistan</option>
                                                                <option value="Tanzania, United Republic of" id='TZ' >Tanzania, United Republic of</option>
                                                                <option value="Thailand" id='TH' >Thailand</option>
                                                                <option value="Timor-Leste" id='TL' >Timor-Leste</option>
                                                                <option value="Togo" id='TG' >Togo</option>
                                                                <option value="Tokelau" id='TK' >Tokelau</option>
                                                                <option value="Tonga" id='TO' >Tonga</option>
                                                                <option value="Trinidad and Tobago" id='TT' >Trinidad and Tobago</option>
                                                                <option value="Tunisia" id='TN' >Tunisia</option>
                                                                <option value="Turkey" id='TR' >Turkey</option>
                                                                <option value="Turkmenistan" id='TM' >Turkmenistan</option>
                                                                <option value="Turks and Caicos Islands" id='TC' >Turks and Caicos Islands</option>
                                                                <option value="Tuvalu" id='TV' >Tuvalu</option>
                                                                <option value="Uganda" id='UG' >Uganda</option>
                                                                <option value="Ukraine" id='UA' >Ukraine</option>
                                                                <option value="United Arab Emirates" id='AE' >United Arab Emirates</option>
                                                                <option value="United Kingdom" id='GB' >United Kingdom</option>
                                                                <option value="United States" id='US' >United States</option>
                                                                <option value="United States Minor Outlying Islands" id='UM' >United States Minor Outlying Islands</option>
                                                                <option value="Uruguay" id='UY' >Uruguay</option>
                                                                <option value="Uzbekistan" id='UZ' >Uzbekistan</option>
                                                                <option value="Vanuatu" id='VU' >Vanuatu</option>
                                                                <option value="Venezuela" id='VE' >Venezuela</option>
                                                                <option value="Viet Nam" id='VN' >Viet Nam</option>
                                                                <option value="Virgin Islands, British" id='VG' >Virgin Islands, British</option>
                                                                <option value="Virgin Islands, U.s." id='VI' >Virgin Islands, U.s.</option>
                                                                <option value="Wallis and Futuna" id='WF' >Wallis and Futuna</option>
                                                                <option value="Western Sahara" id='EH' >Western Sahara</option>
                                                                <option value="Yemen" id='YE' >Yemen</option>
                                                                <option value="Zambia" id='ZM' >Zambia</option>
                                                                <option value="Zimbabwe" id='ZW' >Zimbabwe</option>
                                                                
      
                      </select>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <input type="text" class="form-control" placeholder="Phone / WhatsApp" name="mobile">
                      <input type="hidden" name="social_link_type_hidden" value="mobile">
                    
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <input type="text" class="form-control" placeholder="Skype / Telegram" name="skype">
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <select class="form-control" name="services">
                        <option value="" hidden="">I am interested in</option>
                        <option value="Food Delivery App">Food Delivery App</option>
                        <option value="Cab / Taxi Booking App">Cab / Taxi Booking App</option>
                        <option value="Ride-Sharing App">Ride-Sharing App</option>
                        <option value="On-Demand Multi-Services App">On-Demand Multi-Services App</option>
                        <option value="Beauty / Salon Services App">Beauty / Salon Services App</option>
                        <option value="Doctor On Demand App">Doctor On Demand App</option>
                        <option value="Healthcare App">Healthcare App</option>
                        <option value="Fitness Training App">Fitness Training App</option>
                        <option value="Travel / Tourism App">Travel / Tourism App</option>
                        <option value="Grocery Delivery App">Grocery Delivery App</option>
                        <option value="Fantasy Sports App">Fantasy Sports App</option>
                        <option value="Car / Two-Wheeler Wash App">Car / Two-Wheeler Wash App</option>
                        <option value="Laundry App">Laundry App</option>
                        <option value="Restaurant App">Restaurant App</option>
                        <option value="Video Streaming App">Video Streaming App</option>
                        <option value="Logistics App">Logistics App</option>
                        <option value="Fuel Delivery App">Fuel Delivery App</option>
                        <option value="Online Coaching / Tutors App">Online Coaching / Tutors App</option>
                        <option value="Courier / Package Delivery App">Courier / Package Delivery App</option>
                        <option value="Pet Care App">Pet Care App</option>
                        <option value="Wine / Alcohol Delivery App">Wine / Alcohol Delivery App</option>
                        <option value="House Cleaning Services App">House Cleaning Services App</option>
                        <option value="Repair & Maintenance App">Repair & Maintenance App</option>
                        <option value="On Demand App for Industries">On Demand App for Industries</option>
                        <option value="Other">Other</option>
                        
                      </select>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12">
                    <div class="form-group">
                      <textarea class="form-control" rows="3" placeholder="Message" name="message"></textarea>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12">
                    <div class="form-group">
                      <div class="err_message"></div>
                      <button type="submit" class="btn submit_btn">Submit</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
           </div> */}
            </div>
          </div>
        </header>
     
      
        <section className="mid_section ondemad_feature">
          <div className="container">
            <div className="section-heading text-center">
              <h2 className="features_title">Features We Inherit</h2>
              <p className="text-center">We develop on-demand apps with lots of services like tracking facilities, payment facilities and so on as follows.</p>
              <div className="why_round"> </div>
            </div>
            <div className="row">
              <div className="col-sm-3 mt-7">
                <div className="whybottom_box whybottom_box1 hgt_400">
                  <div className="inr_img">
                    <div className="ver_mid">
                      <div className="img_box"><img src="https://www.osiztechnologies.com/asset/images/inner-pages/demand/gps-services.png" alt="GPS Services" title="GPS Services" className="img-fluid" /></div>
                    </div>
                  </div>
                  <h3>GPS Services</h3>
                  <p className="text-center">We develop your on-demand app with an in-built map that can be viewed by both customer and product/service provider. This helps the provider to track your customer and customer to monitor the location of the goods periodically.</p>
                </div>
              </div>
              <div className="col-sm-3 mt-7">
                <div className="whybottom_box whybottom_box2 hgt_400">
                  <h3>In - App Payments</h3>
                  <div className="inr_img">
                    <div className="ver_mid">
                      <div className="img_box"><img src="https://www.osiztechnologies.com/asset/images/inner-pages/demand/in-app-payments.png" alt="In - App Payments" title="In - App Payments" className="img-fluid" /></div>
                    </div>
                  </div>
                  <p className="text-center">On-Demand app developed by us involves the payment ability. This allows customers to pay for your products within the app in a safer and secured environment. </p>
                </div>
              </div>
              <div className="col-sm-3 mt-7">
                <div className="whybottom_box whybottom_box3 hgt_400">
                  <h3>Cloud Integration </h3>
                  <div className="inr_img">
                    <div className="ver_mid">
                      <div className="img_box"><img src="https://www.osiztechnologies.com/asset/images/inner-pages/demand/cloud-integration.png" alt="Cloud Integration" title="Cloud Integration" className="img-fluid" /></div>
                    </div>
                  </div>
                  <p className="text-center">Our on-demand app development process includes the process of creating a separated cloud space for data analytics and storages related to the usage of apps. </p>
                </div>
              </div>
              <div className="col-sm-3 mt-7">
                <div className="whybottom_box whybottom_box4 hgt_400">
                  <h3>Instant Push Notification</h3>
                  <div className="inr_img">
                    <div className="ver_mid">
                      <div className="img_box"><img src="https://www.osiztechnologies.com/asset/images/inner-pages/demand/instant-push-notification.png" alt="Instant Push Notification" title="Instant Push Notification" className="img-fluid" /></div>
                    </div>
                  </div>
                  <p className="text-center">We provide a way by which you can acknowledge your new products or discounts or available products to your customers instantly through notifications. This may help you in reaching your customers faster. </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="mid_section why-business grey-bg">
          <div className="container">
            <div className="section-heading text-center">
              <h2 className="why_title">Why Should You develop an On-Demand Delivery App for Your Business?</h2>
              <div className="why_round"> </div>
            </div>
            <div className="row mar-top-30">
              <div className="col-md-12 col-sm-12">
                <p className="why_para text-center">In the current digital era, on-demand apps are prevalent among consumers as it eases their efforts and improves their comfort. Hence, they have proved to be sure-shot winners in the tech industry. For an entrepreneur who aims to upscale
                  his business online or to build one right from scratch, utilizing the right on-demand app development services to launch their on-demand app is the right origin point to reap quick and exponential growth. </p>
                <div className="row mar-top-30">
                  <div className="col-sm-3">
                    <div className="whybottom_box whybottom_box1 hgt_400">
                      <abbr><img src="https://www.osiztechnologies.com/asset/images/inner-pages/demand/icons-all.svg" alt="Global Reach" title="Global Reach" style={{objectPosition: '-7px -18px'}} /></abbr>
                      <h3>Global Reach</h3>
                    </div>
                  </div>
                  <div className="col-sm-3">
                    <div className="whybottom_box whybottom_box1 hgt_400">
                      <abbr><img src="https://www.osiztechnologies.com/asset/images/inner-pages/demand/icons-all.svg" alt="Customer Comfort" title="Customer Comfort" style={{objectPosition: '-57px -18px'}} /></abbr>
                      <h3>Customer Comfort</h3>
                    </div>
                  </div>
                  <div className="col-sm-3">
                    <div className="whybottom_box whybottom_box1 hgt_400">
                      <abbr><img src="https://www.osiztechnologies.com/asset/images/inner-pages/demand/icons-all.svg" alt="Security & Scalability" title="Security & Scalability" style={{objectPosition: '-110px -18px'}} /></abbr>
                      <h3>Security &amp; Scalability</h3>
                    </div>
                  </div>
                  <div className="col-sm-3">
                    <div className="whybottom_box whybottom_box1 hgt_400">
                      <abbr><img src="https://www.osiztechnologies.com/asset/images/inner-pages/demand/icons-all.svg" alt="Advanced Opportunities" title="Advanced Opportunities" style={{objectPosition: '-160px -18px'}} /></abbr>
                      <h3>Advanced Opportunities </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
                  </section>
                  
                 <section className="mid_section grey-bg" style={{background: '#696767'}}>
        <div className="container">
          <div className="section-heading text-center">
            <h2 className="our_title">Our On-Demand Project Development Phase Cycle</h2>
            <div className="why_round"> </div>
          </div>
          <div className="row mar-top-30">
            <div className="col-sm-12 ">
              <img src="https://www.osiztechnologies.com/asset/images/inner-pages/demand/workflow-desktop.svg" className="img-fluid" style={{width: '100%', filter: 'hue-rotate(253deg)'}} />
            </div>
          </div>
        </div>
      </section>
      
      <section className="mid_section">
        <div className="container">
          <div className="section-heading text-center">
            <h2 className="tools_title">Tools &amp; Technologies We Use</h2>
            <div className="why_round"> </div>
            <p className="text-center">Keeping abreast with the latest leading-edge technologies, the entire process of design and development is executed with upgraded tools and software.</p>
          </div>
          <div className="row mar-top-30 justify-content-center ">
            <div className="col-lg-offset-1 col-sm-4 col-lg-2 center-img-cnt">
              <img src="https://www.osiztechnologies.com/asset/images/inner-pages/demand/angularjs-2.png?v1" alt="AngularJS 2" title="AngularJS 2" className="img-fluid" />
              <h3>AngularJS 2</h3>
            </div>
            <div className="col-sm-4 col-lg-2 center-img-cnt">
              <img src="https://www.osiztechnologies.com/asset/images/inner-pages/demand/ionic.png?v1" alt="Ionic" title="Ionic" className="img-fluid" />
              <h3>Ionic</h3>
            </div>
            <div className="col-sm-4 col-lg-2 center-img-cnt">
              <img src="https://www.osiztechnologies.com/asset/images/inner-pages/demand/apache-cordova.png?v1" alt="Apache Cordova" title="Apache Cordova" className="img-fluid" />
              <h3>Apache Cordova</h3>
            </div>
            <div className="col-sm-4 col-lg-2 center-img-cnt">
              <img src="https://www.osiztechnologies.com/asset/images/inner-pages/demand/nativescript.png?v1" alt="NativeScript" title="NativeScript" className="img-fluid" />
              <h3>NativeScript</h3>
            </div>
            <div className="col-sm-4 col-lg-2 center-img-cnt">
              <img src="https://www.osiztechnologies.com/asset/images/inner-pages/demand/css3.png?v1" alt="CSS3" title="CSS3" className="img-fluid" />
              <h3>CSS3</h3>
            </div>
            <div className="col-lg-offset-1 col-sm-4 col-lg-2 center-img-cnt">
              <img src="https://www.osiztechnologies.com/asset/images/inner-pages/demand/html-5.png?v1" alt="HTML 5" title="HTML 5" className="img-fluid" />
              <h3>HTML 5</h3>
            </div>
            <div className="col-sm-4 col-lg-2 center-img-cnt">
              <img src="https://www.osiztechnologies.com/asset/images/inner-pages/demand/mysql.png?v1" alt="MySQL" title="MySQL" className="img-fluid" />
              <h3>MySQL</h3>
            </div>
            <div className="col-sm-4 col-lg-2 center-img-cnt">
              <img src="https://www.osiztechnologies.com/asset/images/inner-pages/demand/nodejs.png?v1" alt="Node.js" title="Node.js" className="img-fluid" />
              <h3>Node.js</h3>
            </div>
            <div className="col-sm-4 col-lg-2 center-img-cnt">
              <img src="https://www.osiztechnologies.com/asset/images/inner-pages/demand/mongodb.png?v1" alt="MongoDB" title="MongoDB" className="img-fluid" />
              <h3>MongoDB</h3>
            </div>
            <div className="col-sm-4 col-lg-2 center-img-cnt">
              <img src="https://www.osiztechnologies.com/asset/images/inner-pages/demand/ajax.png?v1" alt="Ajax" title="Ajax" className="img-fluid" />
              <h3>Ajax</h3>
            </div>
          </div>
        </div>
      </section>
      <section className="why-osiz-hyp">
        <div className="container">
          <div className="text-center why_hyp_content">
            <h2 className="hyp_common_title">Why Osiz for On-demand Delivery App Development?</h2>
          </div>
          <div className="row mar-top-30">
            <div className="col-md-6 col-sm-6">
              <div className="list_item">
                <ul className="list-unstyled">
                  <li>
                    <img src="https://www.osiztechnologies.com/asset/images/inner-pages/hyper-ledger/icons.svg" className="hyp-tic-sprite" style={{objectPosition: '-3357px -39px'}} />Customizable On-Demand App Solutions.</li>
                  <li>
                    <img src="https://www.osiztechnologies.com/asset/images/inner-pages/hyper-ledger/icons.svg" className="hyp-tic-sprite" style={{objectPosition: '-3357px -39px'}} />Professionals backed by 10+ years of industry experience.</li>
                  <li>
                    <img src="https://www.osiztechnologies.com/asset/images/inner-pages/hyper-ledger/icons.svg" className="hyp-tic-sprite" style={{objectPosition: '-3357px -39px'}} />Direct collaboration with the technical team. </li>
                  <li>
                    <img src="https://www.osiztechnologies.com/asset/images/inner-pages/hyper-ledger/icons.svg" className="hyp-tic-sprite" style={{objectPosition: '-3357px -39px'}} />Meticulous quality analysis cycle.</li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-sm-6 yosiz-hyp-border">
              <div className="list_item">
                <ul className="list-unstyled">
                  <li>
                    <img src="https://www.osiztechnologies.com/asset/images/inner-pages/hyper-ledger/icons.svg" className="hyp-tic-sprite" style={{objectPosition: '-3357px -39px'}} />Apps built on leading-edge software packages.</li>
                  <li>
                    <img src="https://www.osiztechnologies.com/asset/images/inner-pages/hyper-ledger/icons.svg" className="hyp-tic-sprite" style={{objectPosition: '-3357px -39px'}} />Incorporation of authentic API tools.</li>
                  <li>
                    <img src="https://www.osiztechnologies.com/asset/images/inner-pages/hyper-ledger/icons.svg" className="hyp-tic-sprite" style={{objectPosition: '-3357px -39px'}} />Exclusive Offshore project development team.</li>
                  <li>
                    <img src="https://www.osiztechnologies.com/asset/images/inner-pages/hyper-ledger/icons.svg" className="hyp-tic-sprite" style={{objectPosition: '-3357px -39px'}} />On-time delivery at an affordable cost.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className=" eth-dapp-hire">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 eth-dap-hire-box">
              <div className>
                <h2 className="ethdapp_common_title white-text">Hire Our On-demand App Developers</h2>
              </div>
              <p className="hire-para white-text ">Exclusive project development services from Osiz, the on-demand mobile app development company, can be availed by hiring its tech-savvy professionals. Developers assigned for the corresponding product are allocated apportioned workspaces
                to ensure their utmost focus is channelized on the work. With major perks being prompt, frequent communication with the clients and regular updates based on their feedback, the justifiable quality of the end-product would be self-evident.</p>
              <div className="mob-text-center">
                <a target="_blank" href="https://www.osiztechnologies.com/contact-us" className="new_common_btn">Hire Our Professional</a>
              </div>
            </div>
          </div>
        </div>
                  </section>
                  <div>
      
      <SimilarFile/>
                  </div>
      </div>
  );
};

export default DynamicWebsite;
