import './style.css';

export const PaymentMethods = ({ price }) => {
    return (
        <div className='price-payment'>
            <h2>${price}</h2>
            <div className='payment-methods'>
                <h4 id="payment-method-text">Payment Methods</h4>
                <ul className="list-style-none">
                    <li className="d-inline-block">
                        <span className="js-product-detail-payment-logo">
                            <img src="//d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/visa@2x.png" data-src="//d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/visa@2x.png" className="product-payment-logos-img card-img lazyloaded" alt="visa" />
                        </span>
                    </li>
                    <li className="d-inline-block">
                        <span className="js-product-detail-payment-logo">
                            <img src="//d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/mastercard@2x.png" data-src="//d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/mastercard@2x.png" className="product-payment-logos-img card-img lazyloaded" alt="mastercard" />
                        </span>
                    </li>
                    <li className="d-inline-block">
                        <span className="js-product-detail-payment-logo">
                            <img src="//d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/amex@2x.png" data-src="//d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/amex@2x.png" className="product-payment-logos-img card-img lazyloaded" alt="amex" />
                        </span>
                    </li>
                    <li className="d-inline-block">
                        <span className="js-product-detail-payment-logo p-relative svg-icon-text opacity-80">
                            <svg className="svg-credit-card-icon   payment-credit-icon" baseProfile="tiny" xmlns="http://www.w3.org/2000/svg" viewBox="-285 408.9 24 24"><path fill="none" d="M-285 409h24v24h-24v-24z"></path><path d="M-265 413h-16c-1 0-2 .8-2 2v12c0 1 1 2 2 2h16c1 0 2-1 2-2v-12c0-1.2-1-2-2-2zm0 14h-16v-6h16v6zm0-10h-16v-2h16v2z"></path></svg>
                            <svg className="product-payment-icon-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path></svg>
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    )
}
