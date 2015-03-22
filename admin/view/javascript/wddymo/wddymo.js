/**
 * Created by Paul Wijnberg on 8-3-2015.
 */
$( document ).ready(function() {

    //first printer that is available
    var main_printer = null;
    //the target .label file
    var label = null;

    //check if print button and link are defined
    if($('a#wddymo-printer-button').length > 0 && $('input#wddymo-link').length > 0){
        //register click event
        $('a#wddymo-printer-button').click(function(){
            printLabel();
        });
        //load setttings
        loadPrinter();
        loadLabel();
    }

    /**
     * Gets all available Dymo printers by the Dymo SDK.
     * Sets the first printer as the main printer.
     */
    function loadPrinter() {
        var printers = dymo.label.framework.getPrinters();
        if (printers.length == 0) {
            console.log("No Dymo printers found.");

        }else{
            if (printers[0].printerType == "LabelWriterPrinter") {
                main_printer = printers[0];
                console.log('Main printer: ' + main_printer.name);
            }else{
                console.log("No Dymo LabelWriter printers found.");
            }
        }

    }

    /**
     * Loads the .label file with an AJAX request.
     */
    function loadLabel() {
        //TODO make this more relative
        $.get("view/javascript/wddymo/label.label", function(labelXml) {
            label = dymo.label.framework.openLabelXml(labelXml);
            // check if the .label file has an address object
            if (label.getAddressObjectCount() == 0) {
                console.log('Label file (\'/view/javascript/wddymo/label.label\') does not contain an address object.');
                return;
            }
            console.log('Label loaded.');

        }, "text");
    }

    /**
     * Starts the print action if a printer is present and if a .label file is loaded.
     * The first selected order checkbox will be the target order.
     */
    function printLabel() {
        if(!main_printer){
            console.log('No printer available.');
            return;
        }

        if(!label){
            console.log('Label not loaded.');
            return;
        }else{
            var order_id = 0;
            //check each checkbox in the list of orders
            $('table.list input[type="checkbox"]').each(function () {
                //check if this checkbox is checked
                if( $(this).is(':checked') ) {
                    //if this checkbox has a integer as value (an order id)
                    //else it's probably the first checkbox to check all orders...
                    var id = parseInt(this.value);
                    if (id > 0 ){
                        order_id = id;
                        //we found an order id, break out of loop
                        return false;
                    }
                }
            });


            if(order_id > 0){
                //the link is set in a hidden input field generated in vqmod_wd_dymo.xml
                //get the link and add the order_id
                //this is a little dirty..
                var link = $('input#wddymo-link').val();
                link = link + '&order_id=' + order_id;
                $.get( link, function( json ) {
                    if ( json.length == 0 ) {
                        console.log("Did not receive any order data")
                    }else{
                        setAddress(JSON.parse(json));
                        //Dymo label SDK function
                        label.print(main_printer.name);
                    }
                });
            }
        }
    }

    /**
     * Sets the address of the .label file.
     * @param string address The address
     * @returns {*}
     */
    function setAddress(address) {
        if (!label || label.getAddressObjectCount() == 0){
            return;
        }
        //Dymo label SDK function
        return label.setAddressText(0, address);
    }
});
