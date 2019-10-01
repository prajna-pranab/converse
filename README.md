# Converse
## Converse with your Conversol (or other Voltronic OEM controller)

Monitoring and management for Voltronic, Conversol, Axpert and other OEM branded Voltronic solar/inverters using similar protocols.

This software was written for and tested on a Conversol III MPPT charge controller/inverter using information gleaned from various versions of the Voltronic 4048 protocol spec, decompiling the Voltronic WatchPower management software and from a number of forum threads discussing these inverter/controllers.

So far it only supports sending various status enquiries and parsing responses.

It is using node.js in the electron framework. Installation requires node and npm. Clone the repository and then run node start.