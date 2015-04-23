<?php
/**
 * Created by PhpStorm.
 * User: Paul Wijnberg
 * Date: 8-3-2015
 * Time: 19:48
 */

/**
 * Class ControllerWddymoWddymo
 */
class ControllerWddymoWddymo extends Controller
{
    private $error = array();

    public function index()
    {
        //in views/template/wddymo
        //only returns JSON!
        $template = "wddymo/label.tpl";
        $this->template = '' . $template . '';

        //load Order Model
        $this->load->model('sale/order');
        $this->load->language('sale/order');

        //Get the id of the Order
        if (isset($this->request->get['order_id'])) {
            $order_id = $this->request->get['order_id'];
        } else {
            $order_id = 0;
        }

        //Get Order data
        $order_info = $this->model_sale_order->getOrder($order_id);

        //format shipping address for label
        $this->data["shipping_address"] = array();
        if ($order_info) {
            if ($order_info['shipping_address_format']) {
                $format = $order_info['shipping_address_format'];
            } else {
                $format = '{firstname} {lastname}' . "\n" . '{company}' . "\n" . '{address_1} {address_2}' . "\n" . '{postcode} {city}' . "\n" . '{zone}' . "\n" . '{country}';
            }

            $find = array('{firstname}', '{lastname}', '{company}','{address_1}','{address_2}', '{city}','{postcode}','{zone}','{zone_code}','{country}');

            $replace = array(
                'firstname' => $this->firstUpperCase($order_info['shipping_firstname']),
                'lastname'  => $this->firstUpperCase($order_info['shipping_lastname']),
                'company'   => $this->firstUpperCase($order_info['shipping_company']),
                'address_1' => $this->firstUpperCase($order_info['shipping_address_1']),
                'address_2' => $this->firstUpperCase($order_info['shipping_address_2']),
                'city'      => $this->firstUpperCase($order_info['shipping_city']),
                'postcode'  => $this->allUpperCase($order_info['shipping_postcode']),
                'zone'      => $this->firstUpperCase($order_info['shipping_zone']),
                'zone_code' => $this->firstUpperCase($order_info['shipping_zone_code']),
                'country'   => $this->firstUpperCase($order_info['shipping_country'])
            );

            $shipping_address = trim(str_replace($find, $replace, $format));
            $shipping_address = preg_replace('/^[ \t]*[\r\n]+/m', '', $shipping_address);
            $this->data["shipping_address"] = $shipping_address;

        }

        $this->response->setOutput($this->render());
    }

    private function firstUpperCase($string)
    {
        $string = ucwords(strtolower($string));
        return $string;
    }

    private function allUpperCase($string)
    {
        $string = strtoupper($string);
        return $string;
    }
}

?>