# Getting Started / Démarrage Rapide

Voici les instructions pour lancer le projet localement :

1.  **Prérequis** : Avoir Node.js et Angular CLI installés.
2.  **Se placer dans le bon dossier** :
    ```bash
    cd appBikes
    ```
3.  **Installer les dépendances** :
    ```bash
    npm install
    ```
4.  **Lancer le serveur de développement** :
    ```bash
    ng serve
    ```
5.  **Accéder à l'application** : Ouvrez votre navigateur sur `http://localhost:4200`.

---

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

---

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

---

# Troisème phase du projet
## Modalities

Things can evolve.
Client has new requirements and constraints.
Please read next chapter to discover what has gone new.


### New requirements

The client has adopted a proprietary product for its catalog.

As a consequence :

- the API for bikes is imposed :

```json 
{
  "bikes": [
    {
      "name": "Vélo de route Carbon Pro",
      "category": "bike",
      "description": "Vélo de route léger en carbone, idéal pour les longues distances et la compétition.",
      "price": 2499.99
    },
    {
      "name": "VTT Trail Explorer",
      "category": "bike",
      "description": "VTT tout-suspendu conçu pour les sentiers techniques et les terrains accidentés.",
      "price": 1799.50
    },
    {
      "name": "Vélo électrique Urban City",
      "category": "bike",
      "description": "Vélo électrique confortable pour les déplacements urbains quotidiens.",
      "price": 2190.00
    },
    {
      "name": "Gravel Adventure X",
      "category": "bike",
      "description": "Vélo gravel polyvalent, adapté aussi bien à la route qu’aux chemins.",
      "price": 1599.00
    }
  ]
}
```

- the API for accessories is imposed :

```json
[
    {
      "name": "Casque vélo Urban Safe",
      "description": "Casque léger et ventilé offrant une excellente protection pour les trajets urbains.",
      "price": 59.99
    },
    {
      "name": "Antivol en U renforcé",
      "description": "Antivol en acier trempé résistant aux coupures, idéal pour sécuriser votre vélo en ville.",
      "price": 39.90
    },
    {
      "name": "Kit d’éclairage LED avant/arrière",
      "description": "Éclairage LED rechargeable par USB pour une visibilité optimale de nuit.",
      "price": 24.50
    },
    {
      "name": "Pompe à vélo haute pression",
      "description": "Pompe compacte avec manomètre intégré, compatible valves Presta et Schrader.",
      "price": 29.00
    },
    {
      "name": "Sacoche de selle étanche",
      "description": "Sacoche résistante à l’eau pour transporter outils et effets personnels.",
      "price": 19.99
    }
]
```



It would also be better that we only have 1 catalog page, with all the products, and the possibility to filter product :
- by type (bike or accessories)
- by price
- by name (optional)