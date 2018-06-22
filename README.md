# OpenCart Dymo LabelWriter

This extension/module/plugin lets you print a label from the order overview in the backend of OpenCart. For the extension of OpenCart 2.* please see this project: [OpenCart Dymo LabelWriter 2.*].

![OpenCart Order overview action buttons](https://cloud.githubusercontent.com/assets/9481318/6547681/577e06b6-c5df-11e4-8ad2-bbeb028a24ab.PNG)

Note the following:
* This plugin is **not** tested thoroughly
* This plugin is only tested in OpenCart **1.5.6**
* This plugin is only tested with a **Dymo LabelWriter 450**
* This plugin is only tested on **Windows 10 with Internet Explorer 11 (- succeeded) and Google Chrome 67 (- succeeded)**
* Please check on [this demo page](http://www.labelwriter.com/software/dls/sdk/samples/js/PrintLabel/PrintLabel.html) if you can print a label through your browser

### Dependencies

This plugin depends on the following frameworks/SDK's/modules

* An installed and connected Dymo LabelWriter or a configured (fake) Dymo LabelWriter driver
* [DLS] DYMO Label Software v8.7.2
* [VQMod] 2.4
* [jQuery] 1.7.1 (already used in the backend of OpenCart 1.5.6)
* [Dymo Label Framework SDK]

### Installation

* Copy all the files of /admin directory and /vqmod directory in the target directories
* Grant permission for the plugin to the appropriate user group

### Known Issues

At this moment there are no known issues. Please let us know if you have any problems with the module!

### Troubleshoot

* Please check if you have the right version installed of the [DLS]
* If you updated the DLS, please restart your browser or restart your computer completely.
* Clear the OpenCart cache
* Clear your own browser cache
* Please check on [this demo page](http://www.labelwriter.com/software/dls/sdk/samples/js/PrintLabel/PrintLabel.html) if you can print a label through your browser. If not, try a different browser. The demo page should work. If not, this module probably won't work. 

### Todo's

 - Write Tests
 - Minify JavaScript files
 - Make the loading of printers more dynamic
 - Print multiple labels at once
 - Maybe make the plugin compatible with other eCommerce platforms?

### Version
1.1.0 Beta

### Contribute

Thank you for your interest in contributing! There are many ways to contribute to this project. Get started [here](https://github.com/Paulsky/opencart-dymo-labelwriter/blob/master/CONTRIBUTING.md).

### License

MIT

[Dymo Label Framework SDK]: http://labelwriter.com/software/dls/sdk/js/DYMO.Label.Framework.latest.js
[jQuery]:http://jquery.com
[VQMod]: https://github.com/vqmod/vqmod
[OpenCart Dymo LabelWriter 2.*]: https://github.com/Paulsky/opencart-2-dymo-labelwriter
[DLS]: http://www.dymo.com/en-GB/online-support/dymo-user-guides