# Première phase de projet
## Modalitiés

The exam has to be done individually.

You can use the resources built during the last TDs.

You can access the web during the exam (JS or various libraries or tools documentation for example).

## Deliverables

Make a zip of your projects (don't deliver the node_modules directory), and upload the zip to the delivery area of Mootse at the end of the Exam.

No further deliverables will be allowed.


## Subject

This TD aims at implementing with Angular an e-commerce site for bikes with at least following features :
- a catalog of bikes
- a cart

A bike has at least following properties :
- a name
- a category
- a description
- a price

Data lists is loaded from static json file stored in the backend, thank to an HTTP request (simulation of a back-end API).

### Expected behaviour

The single page app displays at least :
- a header with the name of the e-shop, and a navigation bar to access the catalog of bikes and the cart
- a catalog page with the catalog of bikes with the possibility to :
    - add a bike to the cart
    - see the details of a given bike in a dedicated page, or section, or modal (up to you)
- a cart page with the items added to cart, and the possibility to remove an item to the cart


# Seconde phase du projet
## Modalities

Things can evolve.
Client has new requirements.
Please read next chapter to discover what has gone new.


### New requirements

Please add a contact form, accessible from the Nav bar.
Do not implement mail sending, please just show that you can get the mail and the text entered by the user.

Please also add a footer (the same on each page), with classic copyright and social network information.

At last, it would be great if we had two kind of products :
- bikes
- accessories

An accessory has at least following properties :
- a name
- a description
- a price

There should be a link to a bikes page and another link to an accessories page in the navigation bar.

Both kind of products can be added / removed to / from the card.