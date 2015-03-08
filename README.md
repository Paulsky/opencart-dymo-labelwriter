# OpenCart Dymo LabelWriter

This extension/module/plugin lets you print a label from the order overview in the backend of OpenCart.

Note the following:
* This plugin is **not** tested thoroughly
* This plugin is only tested in OpenCart **1.5.6**
* This plugin is only tested with a **Dymo LabelWriter 450**
* This plugin is only tested on **Windows 8.1 with Internet Explorer 11 (- succeeded) and Google Chrome (- failed)**

### Dependencies

This plugin depends on the following frameworks/SDK's/modules

* [VQMod] 2.4
* [jQuery] 1.7.1 (already used in the backend of OpenCart 1.5.6)
* [Dymo Label Framework SDK]

### Installation

* Copy all the files of /admin directory and /vqmod directory in the target directories
* Grant permission for the plugin to the appropriate user group

### Known Issues

At this moment the plugin only works in Internet Explorer. A while ago, with a different version of Google Chrome, this code worked. Some comments and problems are described here: http://developers.dymo.com/2010/06/02/dymo-label-framework-javascript-library-samples-print-a-label/ . But again, this plugin is not tested, for example, on Mac or/and Safari. Quote from the comments:
> There are plans to add Firefox/Chrome support on Mac in the upcoming DLS 8.3 release. But there is no guarantee…

Another quote: 
> I assume you are referring to Chrome on Mac OS X. Now, Chrome version 22 and above have dropped support for Carbon event > > > model of NPAPI plugins. This model event is default for 32-bit plugins and that’s why it can’t load the DYMO plugin. We have > to write a new plugin which is anticipated for DLS 8.5.0.

### Todo's

 - Write Tests
 - Make the loading of printers more dynamic
 - Print multiple labels at once
 - Write version for OpenCart 2.0
 - Maybe make the plugin compatible with other eCommerce platforms?

### Version
1.0.0

### Contribute

Want to contribute? Be my quest and fork this project! Let me know all your requests and suggestions!

### License

MIT

[Dymo Label Framework SDK]: http://labelwriter.com/software/dls/sdk/js/DYMO.Label.Framework.latest.js
[jQuery]:http://jquery.com
[VQMod]: https://github.com/vqmod/vqmod