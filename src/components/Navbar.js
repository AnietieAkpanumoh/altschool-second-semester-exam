import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div>
            <nav>
                <svg
                    width="80"
                    height="80"
                    viewBox="0 0 80 80"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M17.8355 21.2065H12.4222L7.61035 36.2221H10.5104L11.8422 32.0976H18.5015L19.8978 36.2221H22.7978L17.8355 21.2065ZM12.6155 29.7132L15.1289 21.9584L17.7066 29.7132H12.6155ZM26.7665 36.2436V21.2065H24.1028V36.2436H26.7665ZM32.6384 25.1591V21.2065H29.9747V25.1591H28.3636V27.2428H28.6214C28.6214 27.2428 29.9747 27.2428 29.9747 28.7251C29.9747 29.3695 29.9747 33.5154 29.9747 33.5154C29.9747 35.0406 31.1992 36.2436 32.7029 36.2436H34.5288V33.8806C34.5288 33.8806 33.9058 33.8806 33.4762 33.8806C33.0251 33.8806 32.6384 33.4939 32.6384 33.0428V28.9184C32.6384 27.3288 29.2658 27.2428 28.7073 27.2428H34.5288V25.1591H32.6384ZM16.0741 47.945C16.0741 47.945 13.1955 47.2791 13.1096 47.2576C12.1429 46.9999 11.3266 46.5273 11.3266 45.5391C11.3266 44.465 12.637 43.5843 14.2911 43.5843C16.3103 43.5843 17.4489 44.8302 17.4489 46.0547H20.2629C20.2629 43.4339 18.2222 41.2213 14.2911 41.2213C10.9615 41.2213 8.51257 43.0043 8.51257 45.5606C8.51257 48.2028 10.1881 49.4702 12.637 50.0287C12.637 50.0287 15.537 50.6947 15.6015 50.7162C16.7185 50.9954 17.6422 51.5539 17.6422 52.6495C17.6422 54.0028 15.9666 54.8621 14.2052 54.7117C11.8207 54.5184 10.94 52.9502 10.94 51.8332H8.14739C8.14739 54.2821 10.1881 56.9887 14.2481 57.0961C17.2985 57.1606 20.4563 55.485 20.4563 52.6495C20.4563 50.0287 18.6518 48.568 16.0741 47.945ZM27.3013 54.5828C25.6043 54.5828 24.7021 52.9717 24.7021 51.1243C24.7021 49.2554 25.8191 47.6658 27.2798 47.6658C28.4398 47.6658 29.3635 48.525 29.6858 49.7065H32.5643C32.0917 46.9354 29.8791 45.3028 27.2583 45.3028C24.3154 45.3028 21.7591 47.8806 21.9095 51.468C22.0384 54.8191 24.4443 56.9243 27.3228 56.9243C30.008 56.9243 32.0058 55.1413 32.5213 52.7139H29.5569C29.3206 53.6806 28.4613 54.5828 27.3013 54.5828ZM37.0457 50.1576C37.0457 50.1791 37.0457 50.2006 37.0457 50.2221C37.0457 50.2006 37.0457 50.1791 37.0457 50.1576ZM40.0961 45.3458C38.4635 45.4747 37.0672 47.1717 37.0457 50.1576C37.0672 48.6754 37.7331 47.6013 39.2583 47.6013C40.9338 47.6013 41.4709 48.8473 41.4709 50.2221V56.688H44.156V49.3199C44.156 46.7421 42.0294 45.1954 40.0961 45.3458ZM34.382 41.651V56.688H37.0457V41.651H34.382ZM51.386 45.3028C48.529 45.3028 45.9083 47.4295 45.9083 51.1243C45.9083 54.8191 48.486 56.9028 51.386 56.9243C54.3075 56.9028 56.8853 54.7976 56.8853 51.1243C56.8853 47.4295 54.2431 45.3028 51.386 45.3028ZM51.386 54.5613C49.9683 54.5613 48.5935 53.4443 48.5935 51.1243C48.5935 48.9332 49.9468 47.6873 51.386 47.6658C52.8468 47.6873 54.2001 48.9547 54.2001 51.1243C54.2001 53.4443 52.8253 54.5613 51.386 54.5613ZM63.7631 45.3028C60.906 45.3028 58.2853 47.4295 58.2853 51.1243C58.2853 54.8191 60.8631 56.9028 63.7631 56.9243C66.6846 56.9028 69.2623 54.7976 69.2623 51.1243C69.2623 47.4295 66.6201 45.3028 63.7631 45.3028ZM63.7631 54.5613C62.3453 54.5613 60.9705 53.4443 60.9705 51.1243C60.9705 48.9332 62.3238 47.6873 63.7631 47.6658C65.2238 47.6873 66.5772 48.9547 66.5772 51.1243C66.5772 53.4443 65.2023 54.5613 63.7631 54.5613ZM73.8201 56.688V41.651H71.1564V56.688H73.8201Z"
                        fill="black"
                    />
                    <path
                        d="M73.8517 32.9629H37.4072V36.2221H73.8517V32.9629Z"
                        fill="black"
                    />
                </svg>
                <Link to="/">Home</Link>
                <Link to="Repositories">Repositories</Link>
                <Link to="undefined">404</Link>
            </nav>
        </div>
    );
}

export default Navbar;
