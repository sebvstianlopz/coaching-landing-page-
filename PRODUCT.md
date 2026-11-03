# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Static HTML, CSS and JavaScript with no build step, hosted on GitHub Pages (decided at project start: the plain static option was proposed and the user approved the plan).

## Users

People in Puerto Rico who follow Jan Medina on Instagram and tap the link in his bio. They are on a phone, usually inside Instagram's in-app browser, and they want to know quickly whether Jan can get them a result like the ones they see, and how to start.

## Product Purpose

The landing page for Jan Medina's hybrid training coaching (strength plus conditioning). It shows real client transformations, explains how the coaching works, and gets the visitor to message Jan on WhatsApp to book a call. Success means a WhatsApp conversation started.

## Positioning

Hybrid coaching: strength and endurance in one plan, run personally by Jan, with weekly check-ins over WhatsApp, for people in Puerto Rico.

## Operating Context

- Traffic comes from the Instagram bio link, so phones and the in-app browser come first.
- The only conversion is a WhatsApp message (`wa.me` link with a pre-filled Spanish message). There's no form, checkout or account.
- The page is in Spanish (Puerto Rico).

## Capabilities and Constraints

- Coaching is offered **online and in person** in Puerto Rico.
- Location is stated as **"Puerto Rico"** only, with no town.
- **No prices on the page.** Jan gives the price on the WhatsApp call.
- Client transformations come from `transformaciones.js`, stats and testimonials from `contenido.js`. Each section hides itself when its data is empty.
- The WhatsApp number is a placeholder until Jan's real number is provided (`WHATSAPP_NUMERO` in `main.js`).

## Brand Commitments

- Name: Jan Medina. Offer: coaching de entrenamiento híbrido.
- Voice: direct, warm, second person (tú), Puerto Rican Spanish.

## Evidence on Hand

- **Not yet provided:** Jan's photos, client before/after photos, real stats and client quotes. The user will supply them.
- Never invent clients, results, quotes, numbers, ratings or press. Sample entries are clearly marked and must be replaced before launch.

## Product Principles

1. Every section moves the visitor toward one action: messaging Jan on WhatsApp.
2. Real proof only. Transformations and numbers are shown with the client's permission or not at all.
3. Phone first: it must feel right in Instagram's in-app browser before anything else.
4. Personal, not corporate: Jan answers in person, and the page should read that way.

## Accessibility & Inclusion

The slider must work by keyboard and screen reader, not only by touch. Text meets WCAG AA contrast, and motion respects `prefers-reduced-motion`.
