import React from 'react'
import Cards from '../Cards'
import { useInterval } from '@react-hooks-library/core'
import {useState} from 'react'
import { useCallback } from "react";

function Locations() {
    const locations1=[
        {
            name: 'Studentski grad',
            text: 'Tošin bunar 143-151, Beograd',
            src: 'https://scontent-vie1-1.xx.fbcdn.net/v/t39.30808-6/306664759_395545779401275_261445117589324162_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=e3f864&_nc_ohc=1jzQhUFhjSUAX_puik-&_nc_ht=scontent-vie1-1.xx&oh=00_AfDISJ1x2U9fbGG2c_OD3EAlsU64S9fmwfhme0XDh1CJkQ&oe=64EC3238'
        },
        {
            name: 'Studentski dom Karaburma',
            text: 'Mije Kovačevića 7b, Beograd',
            src: 'https://fakulteti.edukacija.rs/wp-content/uploads/2014/08/karaburma-beograd.jpg'
        },
        {
            name: 'Studentski dom "Kralj Aleksandar I"',
            text: 'Bulevar Kralja Aleksandra 75, Beograd',
            src: 'https://www.studentskizivot.com/wp-content/uploads/2020/04/kralj-aleksandar.jpg'
        },

    ];

    const locations2=[
        {
            name: 'Studentski dom "4.april"',
            text: 'Vojvode Stepe 320, Beograd',
            src: 'https://www.euronews.rs/data/images/2022-05-23/92864_rs192326-tan2022-4-4-161849585-0_f.jpg'
        },
        {
            name: 'Studentski dom "Slobodan Penezić"',
            text: 'Bana Ivaniša bb, Beograd',
            src: 'https://www.studentskizivot.com/wp-content/uploads/2011/06/penezic.jpg'
        },
        {
            name: 'Studentski dom "Rifat Burdžević"',
            text: 'Milana Rakića 77, Beograd',
            src: 'https://www.studentskizivot.com/wp-content/uploads/2011/06/studentski-dom-Rifat-Burdzevic.jpg'
        },

    ];
    //CUSTOM HOOK -     brojac sekundi provedenih na stranici
    const [count, setCount] = useState(0)

    const increment = useCallback(() => setCount((c) => c + 1), [])

    useInterval(increment, 1000) //povecava za sekund
    return (
        <div>
            <Cards data1={locations1} data2 = {locations2} title='LOKACIJE' type='locations' /> 
            <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2829.8775382407553!2d20.396817726178405!3d44.82405942107066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a65836cd31ac5%3A0xbd2753584a91dbff!2z0KHRgtGD0LTQtdC90YLRgdC60Lgg0LPRgNCw0LQsINCR0LXQvtCz0YDQsNC0!5e0!3m2!1ssr!2srs!4v1692898038654!5m2!1ssr!2srs" 
            width="420"
            height="300"
            style={{ border: "0", margin:30}}
            allowfullscreen=""
            loading="lazy"
            ></iframe>
            <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2830.36946501104!2d20.485818876177824!3d44.81403727107081!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a7a941d346a9f%3A0x28e7b5f4f0de5410!2z0KHRgtGD0LTQtdC90YLRgdC60Lgt0LTQvtC8LdCa0LDRgNCw0LHRg9GA0LzQsA!5e0!3m2!1ssr!2srs!4v1692899319911!5m2!1ssr!2srs" 
            width="420"
            height="300"
            style={{ border: "0", margin:30}}
            allowfullscreen=""
            loading="lazy"
            ></iframe>
            <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2830.8701403995105!2d20.47749907617731!3d44.80383507107084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a7a9ef3c26417%3A0x1f138d9058c16941!2z0KHRgtGD0LTQtdC90YLRgdC60Lgg0LTQvtC8IOKAntCa0YDQsNGZINCQ0LvQtdC60YHQsNC90LTQsNGAIEnigJ0!5e0!3m2!1ssr!2srs!4v1692899422358!5m2!1ssr!2srs" 
            width="420"
            height="300"
            style={{ border: "0", margin:30}}
            allowfullscreen=""
            loading="lazy"
            ></iframe>
            <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2832.8624264038876!2d20.480476276175064!3d44.76322037107106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a70fda13cd3cf%3A0xbc0dd03fe5d70571!2z0KHRgtGD0LTQtdC90YLRgdC60Lgg0LTQvtC8IOKAnjQuINCw0L_RgNC40LvigJ0!5e0!3m2!1ssr!2srs!4v1692899496348!5m2!1ssr!2srs"
            width="420"
            height="300"
            style={{ border: "0", margin:30}}
            allowfullscreen=""
            loading="lazy"
            ></iframe>
            <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2831.1001480296723!2d20.50435067617707!3d44.79914762107082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a7a79324dedc3%3A0xd75cc72f02b44056!2z0KHRgtGD0LTQtdC90YLRgdC60Lgg0LTQvtC8IOKAntCh0LvQvtCx0L7QtNCw0L0g0J_QtdC90LXQt9C40ZvigJ0sINCR0LDQvdCwINCY0LLQsNC90LjRiNCwINCx0LEsINCR0LXQvtCz0YDQsNC0!5e0!3m2!1ssr!2srs!4v1692899559613!5m2!1ssr!2srs" 
            width="420"
            height="300"
            style={{ border: "0", margin:30}}
            allowfullscreen=""
            loading="lazy"
            ></iframe>
            <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2831.2326129710204!2d20.504444476176882!3d44.79644787107081!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a7a78900bbd6d%3A0x8769d29fdbfec9bf!2z0KDQtdGB0YLQvtGA0LDQvSAi0KDQuNGE0LDRgiDQkdGD0YDRn9C10LLQuNGbIg!5e0!3m2!1ssr!2srs!4v1692899640202!5m2!1ssr!2srs" 
            width="420"
            height="300"
            style={{ border: "0", margin:30}}
            allowfullscreen=""
            loading="lazy"
            ></iframe>
            <p>Provedeno vreme na stranici - {count} sec </p>

        </div>
    )
}

export default Locations