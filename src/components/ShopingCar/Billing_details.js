import React from 'react'
import '../../style/Shoping/Billing_details.scss'
import Navigation_Navber from '../../components/Navigation_Navber/Navigation_Navber'
import Footer from '../../components/Navigation_Navber/Footer'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Billing_details = () => {
    return (
        <>
            <Navigation_Navber />
            <Container>


                <section className="content_Billing_details">
                    <form name="checkout" method="post" className="checkout woocommerce-checkout col-md-12" action="" enctype="multipart/form-data">
                        <div className="col2-set col-xl-8 col-lg-8 col-md-12 col-sm-12" id="customer_details">
                            <div className="col-12 col_1">
                                <div className="woocommerce-billing-fields">
                                    <h3>
                                        <font className="vertical-align-inherit">
                                            <font className="vertical-align-inherit">結算明細</font>
                                        </font>
                                    </h3>
                                    <p className="form-row form-row form-row-first validate-required" id="billing_first_name_field">
                                        <label for="billing_first_name" className="">名 <abbr className="required" title="erforderlich">*</abbr></label>
                                        <input type="text" className="input-text form-control " name="billing_first_name" id="billing_first_name" placeholder="" value="" />
                                    </p>
                                    <p className="form-row form-row form-row-last validate-required" id="billing_last_name_field">
                                        <label for="billing_last_name" className="">姓 <abbr className="required" title="erforderlich">*</abbr></label>
                                        <input type="text" className="input-text form-control" name="billing_last_name" id="billing_last_name" placeholder="" value="" />
                                    </p>
                                    <p className="form-row form-row form-row-first validate-required validate-email" id="billing_email_field">
                                        <label for="billing_email" className="">電子信箱<abbr className="required" title="erforderlich">*</abbr></label>
                                        <input type="email" className="input-text form-control" name="billing_email" id="billing_email" placeholder="" value="" />
                                    </p>
                                    <p className="form-row form-row form-row-last validate-required validate-phone" id="billing_phone_field">
                                        <label for="billing_phone" className="">聯絡電話 <abbr className="required" title="erforderlich">*</abbr></label>
                                        <input type="tel" className="input-text form-control" name="billing_phone" id="billing_phone" placeholder="" value="" /></p>
                                    <p className="form-row form-row form-row-wide address-field update_totals_on_change validate-required" id="billing_country_field">
                                        <label for="billing_country" className="">縣市 <abbr className="required" title="erforderlich">*</abbr></label>
                                        <select name="billing_country" id="billing_country" className="country_to_state country_select " >
                                            <option value="TA">台北市</option>
                                            <option value="TB">臺中市</option>
                                            <option value="TC">基隆市</option>
                                            <option value="TD">臺南市</option>
                                            <option value="TE">高雄市</option>
                                            <option value="TF">新北市</option>
                                            <option value="TG">宜蘭縣</option>
                                            <option value="TH">桃園縣</option>
                                            <option value="TJ">新竹縣</option>
                                            <option value="TK">苗栗縣</option>
                                            <option value="TL">臺中縣</option>
                                            <option value="TM">南投縣</option>
                                            <option value="TN">彰化縣</option>
                                            <option value="TP">雲林縣</option>
                                            <option value="TQ">嘉義縣</option>
                                            <option value="TR">臺南縣</option>
                                            <option value="TS">高雄縣</option>
                                            <option value="TT">屏東縣</option>
                                            <option value="TU">花蓮縣</option>
                                            <option value="TV">臺東縣</option>
                                            <option value="TX">澎湖縣</option>
                                            <option value="TY">陽明山</option>
                                            <option value="TW">金門縣</option>
                                            <option value="TZ">連江縣</option>
                                            <option value="TI">嘉義市</option>
                                            <option value="TO">新竹市</option>
                                        </select>
                                        <noscript><input type="submit" name="woocommerce_checkout_update_totals" value="Land aktualisieren" /></noscript>
                                    </p>
                                    <p className="form-row form-row form-row-wide address-field validate-required" id="billing_address_1_field">
                                        <label for="billing_address_1" className="">地址 <abbr className="required" title="erforderlich">*</abbr></label>
                                        <input type="text" className="input-text form-control" name="billing_address_1" id="billing_address_1" placeholder="Straße" value="" />
                                    </p>
                                    <p className="form-row form-row form-row-wide address-field" id="billing_address_2_field">
                                        <input type="text" className="input-text form-control" name="billing_address_2" id="billing_address_2" placeholder="Appartement, Wohnung, Einheit etc. (optional)" value="" />
                                    </p>
                                    <p className="form-row form-row-wide create-account">
                                        <input className="input-checkbox form-control" id="createaccount" type="checkbox" name="createaccount" value="1" />
                                        <label for="createaccount" className="checkbox">創造新的帳戶?</label>
                                    </p>
                                </div>
                            </div>
                            <div className="col-12 col_2">
                                <div className="woocommerce-shipping-fields">
                                    <h3>附加訊息</h3>
                                    <p className="form-row form-row notes" id="order_comments_field">
                                        <label for="order_comments" className="order_comments_label">
                                            <font className="order_comments_text">
                                                對訂單的評論
                                        </font>
                                        </label>
                                        <textarea name="order_comments" className="input-text form-control" id="order_comments" placeholder="Anmerkungen zu deiner Bestellung, z.B. besondere Hinweise für die Lieferung." rows="2" cols="5"></textarea>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div id="order_review" className="woocommerce-checkout-review-order col-xl-4 col-lg-4 col-md-12 col-sm-12">
                            <h3 id="order_review_heading">Your order</h3>
                            <table className="shop_table woocommerce-checkout-review-order-table">
                                <thead>
                                    <tr>
                                        <th className="product-name">Product</th>
                                        <th className="product-total">Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="cart_item">
                                        <td className="product-name">
                                            Villenoir Pinot Noir&nbsp;&nbsp; <strong className="product-quantity">&times;2</strong> </td>
                                        <td className="product-total">
                                            <span className="woocommerce-Price-amount amount">378,00&nbsp;<span
                                                className="woocommerce-Price-currencySymbol">&euro;</span></span> </td>
                                    </tr>
                                </tbody>
                                <tfoot>
                                    <tr className="cart-subtotal">
                                        <th>Subtotal</th>
                                        <td>
                                            <span className="woocommerce-Price-amount amount">378,00&nbsp;
                            <span className="woocommerce-Price-currencySymbol">&euro;</span>
                                            </span>
                                        </td>
                                    </tr>
                                    <tr className="woocommerce-shipping-totals shipping">
                                        <th>Shipping</th>
                                        <td data-title="Shipping">
                                            <ul id="shipping_method" className="woocommerce-shipping-methods">
                                                <li>
                                                    <input type="hidden" name="shipping_method[0]" data-index="0"
                                                        id="shipping_method_0_flat_rate3" value="flat_rate:3" className="shipping_method" />
                                                    <label for="shipping_method_0_flat_rate3">Flat rate:
                                    <span className="woocommerce-Price-amount amount">10,00&nbsp;
                                        <span className="woocommerce-Price-currencySymbol">&euro;</span>
                                                        </span>
                                                    </label>
                                                </li>
                                            </ul>
                                        </td>
                                    </tr>
                                    <tr className="order-total">
                                        <th>Total</th>
                                        <td>
                                            <strong>
                                                <span className="woocommerce-Price-amount amount">388,00&nbsp;
                                <span className="woocommerce-Price-currencySymbol">&euro;</span>
                                                </span>
                                            </strong>
                                        </td>
                                    </tr>
                                </tfoot>
                            </table>
                            <input type='hidden' name='lang' value='en' />
                            <div id="payment" className="woocommerce-checkout-payment">
                                <div className="form-row place-order">
                                    <button type="submit" className="button alt button_alt" name="woocommerce_checkout_place_order" id="place_order"
                                        value="Place order" data-value="Place order">Place order</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </section>
            </Container>
            <Footer />
        </>
    )
}
export default Billing_details