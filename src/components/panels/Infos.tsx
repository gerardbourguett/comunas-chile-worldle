/* eslint-disable prettier/prettier */
import { Guesses } from "../Guesses";
import { Panel } from "./Panel";
import React from "react";
import { Worldle } from "../Worldle";
import { formatDistance } from "../../domain/geography";
import { SettingsData } from "../../hooks/useSettings";
import { Twemoji } from "@teuteuf/react-emoji-render";

interface InfosProps {
  isOpen: boolean;
  close: () => void;
  settingsData: SettingsData;
}

export function Infos({ isOpen, close, settingsData }: InfosProps) {
  return (
    <Panel title="COMO SE JUEGA" isOpen={isOpen} close={close}>
      <div className="space-y-3 text-justify border-b-2 border-gray-200 pb-3 mb-3">
        <div>
          Guess the <Worldle /> in 6 guesses.
        </div>
        <div>
          Cada oportunidad debe ser una comuna del territorio chileno, sea
          continental o insular ...
        </div>
        <div>
          Después de cada intento, tendrás la distancia, la dirección y la
          proximidad de su suposición y el país de destino.
        </div>
        <div>
          La distancia es medida en base a la ubicación de las capitales
          comunales, por tanto puede estar una comuna vecina de la otra y
          aparecer a varios kilómetros de distancia. Por ejemplo, la comuna de{" "}
          <span className="font-bold">Puente Alto</span> está a unos 47
          kilómetros de <span className="font-bold">San José de Maipo</span>,
          sin embargo estas son comunas colindantes.
        </div>
        <div>
          NOTA IMPORTANTE: El nombre de las comunas en muchos casos NO COINCIDE
          con el nombre de la ciudad capital del mismo. Por ejemplo, la comuna
          de <span className="font-bold">Santiago</span> es{" "}
          <span className="font-bold">Santiago Centro</span> pero la ciudad
          capital es <span className="font-bold">Santiago</span>
        </div>
      </div>
      <div className="space-y-3 text-justify border-b-2 border-gray-200 pb-3 mb-3">
        <div className="font-bold">Examples</div>
        <div>
          <Guesses
            rowCount={1}
            guesses={[
              {
                name: "Isla de Pascua",
                direction: "E",
                distance: 3_772_000,
              },
            ]}
            settingsData={settingsData}
          />
          <div className="my-2">
            Tu intento{" "}
            <span className="uppercase font-bold">Isla de Pascua</span> está a{" "}
            {formatDistance(3772000, settingsData.distanceUnit)} lejos de la
            comuna de destino, está en dirección Este y tienes solo un 24% de
            proximidad. ¡Estás bastante lejos!
          </div>
        </div>
        <div>
          <Guesses
            rowCount={1}
            guesses={[
              {
                name: "Ñuñoa",
                direction: "SE",
                distance: 119_000,
              },
            ]}
            settingsData={settingsData}
          />
          <div className="my-2">
            Tu segundo intento{" "}
            <span className="uppercase font-bold">Ñuñoa</span> está muy cerca.{" "}
            {formatDistance(119000, settingsData.distanceUnit)} hacia el sur.
            97% de proximidad
          </div>
        </div>
        <div>
          <Guesses
            rowCount={1}
            guesses={[
              {
                name: "San Vicente",
                direction: "N",
                distance: 0,
              },
            ]}
            settingsData={settingsData}
          />
          <div className="my-2">
            Próximo intento,{" "}
            <span className="uppercase font-bold">San Vicente</span>, es la
            comuna escondida. ¡Felicitaciones!{" "}
            <Twemoji text="🎉" options={{ className: "inline-block" }} />
          </div>
        </div>
      </div>
      <div className="space-y-3 text-justify border-b-2 border-gray-200 pb-3 mb-3 font-bold">
        A new <Worldle /> will be available every day!
      </div>
      <div className="space-y-3 text-justify border-b-2 border-gray-200 pb-3 mb-3">
        <div className="font-bold">Any question or suggestion?</div>
        <div>
          Check the{" "}
          <a
            className="underline"
            href="https://worldle.notion.site/Worldle-b84ab0f002e34866980a4d47cf9291b7"
            target="_blank"
            rel="noopener noreferrer"
          >
            Worldle FAQ
          </a>
          !
        </div>
      </div>
      <div className="space-y-3 text-justify border-b-2 border-gray-200 pb-3 mb-3">
        <Worldle /> has been <span className="font-bold">heavily</span> inspired
        by{" "}
        <a
          className="underline"
          href="https://www.powerlanguage.co.uk/wordle/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Wordle
        </a>{" "}
        created by{" "}
        <a
          className="underline"
          href="https://twitter.com/powerlanguish"
          target="_blank"
          rel="noopener noreferrer"
        >
          Josh Wardle (@powerlanguish)
        </a>
        .
      </div>
      <div className="space-y-3 text-justify pb-3">
        <div>
          Editado del código de Worldle de{" "}
          <a
            className="underline"
            href="https://twitter.com/teuteuf"
            target="_blank"
            rel="noopener noreferrer"
          >
            @teuteuf
          </a>{" "}
          - (
          <a
            className="underline"
            href="https://github.com/teuteuf/worldle/"
            target="_blank"
            rel="noopener noreferrer"
          >
            source code
          </a>
          )
        </div>
        <div>
          Creado por{" "}
          <a
            className="underline"
            href="https://twitter.com/vanderfondi"
            target="_blank"
            rel="noopener noreferrer"
          >
            @vanderfondi
          </a>{" "}
          - (
          <a
            className="underline"
            href="https://github.com/gerardbourguett/comunas-chile-worldle"
            target="_blank"
            rel="noopener noreferrer"
          >
            source code
          </a>
          )
        </div>
      </div>
    </Panel>
  );
}
