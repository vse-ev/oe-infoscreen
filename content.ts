import type { View } from './types/View'

// Parameter erklärt:

//  display:
//      Auf diesen Infopanelen wird das Bild angezeigt.
//      Wenn man diesen Parameter weglässt, wird das Bild auf allen Infopanelen angezeigt.
//      Verfügbar sind: oe_fenster, oe_clubraum, trabs

//  days:
//      An diesen Tagen wird das Bild angezeigt.
//      Wenn man diesen Parameter weglässt, wird das Bild an allen Tagen angezeigt.
//      0 = Sonntag
//      1 = Montag
//      2 = Dienstag
//      3 = Mittwoch
//      4 = Donnerstag
//      5 = Freitag
//      6 = Samstag

//  expire:
//      Das Bild wird bis zu diesem Zeitpunkt angezeigt.
//      Wenn man diesen Parameter weglässt, wird das Bild immer angezeigt.
//      Format: JJJJ-MM-DD SS:mm also bspw. 2025-10-01 17:30

//  image:
//      Der Name des Bildes samt Dateiendung.
//      Das Bild muss im Ordner /public/images/content/ liegen.



// Beispiel days:
//  { days: [0, 1, 2, 3, 4, 5, 6], image: 'qc.jpg', }

// Beispiel expire:
//  { expire: '2025-03-29 19:43', image: 'qc.jpg', }

// Beispiel display:
//  { display: 'oe_fenster', image: 'qc.jpg', }



export default [
    { display: ['oe_fenster', 'oe_clubraum', 'trabs'], days: [0, 1, 2, 3, 4, 5, 6], image: 'qc.jpg', },
    { display: ['oe_fenster', 'oe_clubraum', 'trabs'], days: [0, 1, 2, 3, 4, 5, 6], image: 'trabs_1.jpg', },
    { display: ['oe_fenster', 'oe_clubraum', 'trabs'], days: [0, 1, 2, 3, 4, 5, 6], image: 'finq_verstaerkung.png', },
    { display: ['oe_fenster', 'oe_clubraum', 'trabs'], days: [0, 1, 2, 3, 4, 5, 6], image: 'pebbles_sommerslam.jpg', },
    { display: ['oe_fenster', 'oe_clubraum', 'trabs'], days: [0, 1, 2, 3, 4, 5, 6], image: 'trans_kampfsport.png', },
    { display: ['oe_fenster', 'oe_clubraum', 'trabs'], days: [0, 1, 2, 3, 4, 5, 6], image: 'sven.jpg', },
    { display: ['oe_fenster', 'oe_clubraum', 'trabs'], days: [0, 1, 2, 3, 4, 5, 6], image: 'aufruf_kneipenabend.jpg', },
    { display: ['oe_fenster', 'oe_clubraum', 'trabs'], days: [0, 1, 2, 3, 4, 5, 6], image: 'wlan.jpg', },
    { display: ['oe_fenster', 'oe_clubraum', 'trabs'], days: [0, 1, 2, 3, 4, 5, 6], image: 'trabs_2.jpg', },
    { display: ['oe_fenster', 'oe_clubraum', 'trabs'], days: [0, 1, 2, 3, 4, 5, 6], image: 'sven.jpg', },
    { display: ['oe_fenster', 'oe_clubraum', 'trabs'], days: [0, 1, 2, 3, 4, 5, 6], image: 'aufruf_plakate.jpg', },
    { display: ['oe_fenster', 'oe_clubraum', 'trabs'], days: [0, 1, 2, 3, 4, 5, 6], image: 'trabs_3.jpg', },
    { display: ['oe_fenster', 'oe_clubraum', 'trabs'], days: [0, 1, 2, 3, 4, 5, 6], image: 'aufruf_kneipenabend.jpg', },
    { display: ['oe_fenster', 'oe_clubraum', 'trabs'], days: [0, 1, 2, 3, 4, 5, 6], image: 'sven.jpg', },
    { display: ['oe_fenster', 'oe_clubraum', 'trabs'], days: [0, 1, 2, 3, 4, 5, 6], image: 'wlan.jpg', },
    { display: ['oe_fenster', 'oe_clubraum', 'trabs'], days: [0, 1, 2, 3, 4, 5, 6], image: 'puppy_1.jpg', },
    { display: ['oe_fenster', 'oe_clubraum', 'trabs'], days: [0, 1, 2, 3, 4, 5, 6], image: 'wmd.jpg', },
    { display: ['oe_fenster', 'oe_clubraum', 'trabs'], days: [0, 5, 6], image: 'ff_jahr.png', },
] as View[]
