import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";
import React, { useState } from "react";
import "../styles/price.css";

export function HoverText5() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        block
        variant="danger"
        outline
        active
        size="sm"
        
      >
        View More
      </Button>
      <Collapse in={open}>
        <div id="Upper Body">
          <br></br>
          Moxibustion is a form of heat therapy in which dried plant materials
          called "moxa" are burned on or very near the surface of the skin. The
          intention is to warm and invigorate the flow of Qi in the body and
          dispel certain pathogenic influences. Moxa is usually made from the
          dried leafy material of Chinese mugwort (Artemesia argyi or
          A.vlugaris), but it can be made of other substances as well.
        </div>
      </Collapse>
    </>
  );
}

export function HoverText3() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        block
        variant="danger"
        outline
        active
        size="sm"
      >
        View More
      </Button>
      <Collapse in={open}>
        <div id="Upper Body">
          <br></br>
          Reflexology is the application of pressure to areas on the feet (or
          the hands). Reflexology is generally relaxing and may help alleviate
          stress. The theory behind reflexology is that areas of the foot
          correspond to organs and systems of the body. Pressure applied to the
          foot is believed to bring relaxation and healing to the corresponding
          area of the body. Reflexologists use foot charts to guide them as they
          apply pressure to specific areas. Reflexology is sometimes combined
          with other hands-on therapies and may be offered by chiropractors and
          physical therapists, among others. Several studies indicate that
          reflexology may reduce pain and psychological symptoms, such as stress
          and anxiety, and enhance relaxation and sleep. Given that reflexology
          is also low risk, it can be a reasonable option if you're seeking
          relaxation and stress relief.
        </div>
      </Collapse>
    </>
  );
}

export function HoverText4() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        block
        variant="danger"
        outline
        active
        size="sm"
      >
        View More
      </Button>
      <Collapse in={open}>
        <div id="Upper Body">
          <br></br>
          Acupuncture involves the insertion of very thin needles through your
          skin at strategic points on your body. A key component of traditional
          Chinese medicine, acupuncture is most commonly used to treat pain.
          Increasingly, it is being used for overall wellness, including stress
          management. Traditional Chinese medicine explains acupuncture as a
          technique for balancing the flow of energy or life force — known as
          chi or qi (chee) — believed to flow through pathways (meridians) in
          your body. By inserting needles into specific points along these
          meridians, acupuncture practitioners believe that your energy flow
          will re-balance. In contrast, many Western practitioners view the
          acupuncture points as places to stimulate nerves, muscles and
          connective tissue. Some believe that this stimulation boosts your
          body's natural painkillers.
        </div>
      </Collapse>
    </>
  );
}
export function HoverText2() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        block
        variant="danger"
        outline
        active
        size="sm"
      >
        View More
      </Button>
      <Collapse in={open}>
        <div id="Upper Body">
          <br></br>
          <p>
            ********************************************************************************************************************************
            <br></br>
            <br></br>
            Therapeutic Massage can work wonders on the places you hold your
            tension. Chronic stress, tension and pain don’t have to be a part of
            your life. This massage focuses on the muscles, tendons and fascia
            underlying the surface layer of muscle, releasing the concentrated
            tension with slow strokes and deep pressure. Once released, the
            muscles are able to get proper blood flow and oxygenation. This
            technique may leave you with a little soreness right afterwards, but
            you’re sure to feel better and more relaxed than you have in a long
            time.
          </p>
          <br></br>
          <p>
            *******************************************************************************************************************************
            <br></br>
            <br></br>
            General Massage for relaxation and perfect for first timers. Reduces
            stress and tension. It effects on circulation and nervous system. It
            stretches the ligaments, muscles and tendons keeping them supple and
            pliable. Main purpose of Swedish Massage is to move fluids, increase
            the oxygen flow in the blood and release toxins from the muscles.
            Promoting health and well being.
          </p>
          <br></br>
          <p>
            **************************************************************************************************************************************
            <br></br>
            <br></br>
            Sport Massage is typically used before, during, and after athletic
            events. The purpose of the massage is to prepare the athlete for
            peak performance, to drain away fatigue, to relieve swelling, to
            reduce muscle tension, to promote flexibility and to prevent
            injuries. The technique often involves a blend of traditional
            Swedish Massage Shiatsu and stretches specifically designed to treat
            athletes. Each sport uses muscles groups in a different way. Sport
            massage is designed to address those specific concerns and way
            differ according to the sport the athlete plays. It helps heal
            strained muscles and allow healthy ones to reach peak performance
            and maintain it while minimizing the risk of injury.
          </p>
          <br></br>
          <p>
            **********************************************************************************************************************************
            <br></br>
            <br></br>
            Deep Tissue Massage is used to release chronic muscle tension
            through slower strokes and more direct deep pressure or friction
            applied across the grain of the muscles not with the grain. Deep
            tissue massage helps to break up and eliminate scar tissue. Deep
            tissue massage usually focuses on more specific areas and may cause
            some soreness during or right after the massage. However, if the
            massage is done correctly you should feel better than ever within a
            day or two.
          </p>
          <br></br>
        </div>
      </Collapse>
    </>
  );
}
export function HoverText1() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        block
        variant="danger"
        outline
        active
        size="sm"
      >
        View More
      </Button>
      <Collapse in={open}>
        <div id="Upper Body">
          <br></br>
          **********************************************************************
          <br></br>
          <br></br>
          Hot stone massage is a variation on classic massage therapy. Heated
          smooth, flat stones are placed on key points on the body. The massage
          therapist may also hold the stones and use them to massage certain
          areas of the body. The heat warms and relaxes the muscles, which
          allows the therapist to apply deeper pressure, if desired. The warmth
          of the hot stones improves circulation and calms the nervous system.
          People also get hot stone massage for a variety of health conditions:
          Back pain and aches Poor circulation Osteoarthritis and arthritis pain
          Stress, anxiety and tension Insomnia
          <br></br>
          <br></br>
          **********************************************************************
          <br></br>
          <br></br>
          Cupping or Gua Sha refers to an entire body service. This is
          accomplished by rubbing the muscles with long gliding strokes in the
          direction of blood returning to the heart. When injuries occur deep in
          the muscle, bleeding often occurs causing deep bruises. There will
          also be edema in the area involving the coagulation of sticky
          proteins. The combining presence of these elements usually results in
          stagnation of circulation to the area - resulting in pain,
          dysfunction, and chronic conditions. The vacuum formed by Cupping
          draws up the old non-circulating stagnant blood and sticky fluids from
          the area, bringing them up to the surface and away from the injury so
          that healthy free circulation can be restored to the affected area,
          thus creating space for oxygen, living cells and nutrients for faster
          recovery.
        </div>
      </Collapse>
    </>
  );
}
