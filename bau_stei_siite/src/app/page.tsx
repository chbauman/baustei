"use client";

import Cover from "./cover";
import Footer from "./footer";
import { AudioPlayer, SectionHeading, VideoEmbed } from "./common";
import { useAgenda } from "./agenda";

export default function Home() {
  const [futureEvents, pastEvents] = useAgenda();

  return (
    <div className="min-h-screen flex flex-col">
      <Cover />
      <main className="flex-grow">
        <div className="max-w-5xl mx-auto px-4">
          <VideoEmbed youtubeId="f2eBIpCaL2s" />

          <SectionHeading title="Agenda" />
          <p className="mb-3 text-gray-700 dark:text-gray-300 text-lg">
            Unsere nächsten Auftritte finden an folgenden Daten statt:
          </p>
          {futureEvents}

          <SectionHeading title="Das Trio" />
          <section className="max-w-3xl mx-auto px-4 py-2 text-center">
            <img
              src="/band_photo.jpg"
              alt="Bau Stei Trio Besetzung"
              className="mx-auto mb-6 w-108 md:w-148"
            />
            <p className="mb-6 text-gray-700 dark:text-gray-300 text-lg">
              Das Bau Stei Trio besteht aus folgenden Musikern (von links nach
              rechts):
            </p>
            <ul className="list-disc list-inside space-y-2 text-left max-w-md mx-auto text-gray-700 dark:text-gray-300">
              <li>
                <strong>Finn Steinemann</strong> - Euphonium
              </li>
              <li>
                <strong>Christian Baumann</strong> - Trompete
              </li>
              <li>
                <strong>Hansueli Baumann</strong> - Akkordeon
              </li>
            </ul>
          </section>

          <SectionHeading title="Aufnahmen" />
          <p className="mb-3 text-gray-700 dark:text-gray-300 text-lg">
            <strong>Frühlingstanz:</strong>
            <br />
            Eine Eigenkomposition des Bau Stei Trios, entstanden im Frühling
            2024. Komponiert von Christian Baumann. Aufgenommen beim Auftritt am
            06.06.2025.
          </p>
          <AudioPlayer source="fruehlingstanz.mp3" />

          <SectionHeading title="Vergangene Auftritte" />
          <p className="mb-3 text-gray-700 dark:text-gray-300 text-lg">
            An folgenden Anlässen haben wir schon gespielt:
          </p>
          {pastEvents}

          <SectionHeading title="Kontakt" />
          <p className="mb-6 text-gray-700 dark:text-gray-300 text-lg">
            Wollen Sie uns für einen Anlass buchen oder haben sonst ein
            Anliegen? Kontaktieren Sie uns über{" "}
            <a
              href="mailto:bausteitrio@gmail.com"
              aria-label="Email"
              className="text-blue-600 hover:underline"
            >
              bausteitrio@gmail.com
            </a>{" "}
            oder folgen Sie uns auf{" "}
            <a
              href="https://instagram.com/bau_stei_trio"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-blue-600 hover:underline"
            >
              Instagram.
            </a>
          </p>

          <SectionHeading title="Über Uns" />
          <p className="mb-6 text-gray-700 dark:text-gray-300 text-lg">
            Im Sommer 2021 probten die Musiker zum ersten mal alle zusammen im
            Trio. Davor hatten sie sich schon länger gekannt, hatten bis dahin
            jedoch nur in anderen Formationen musiziert. Die Bläser spielten
            schon länger zusammen im{" "}
            <a
              href="https://mv-merishausen.ch/"
              className="text-blue-600 hover:underline"
            >
              Musikverein Merishausen
            </a>
            , Hansueli und Christian hatten im familiären Rahmen schon zusammen
            musiziert. Als das Coronavirus dann die musikalische Aktivität im
            Verein unterband, suchten die drei andere Möglichkeiten um weiterhin
            Musik zu machen. So ist daraus schlussendlich das{" "}
            <strong>Bau Stei Trio</strong> entstanden. Etwas mehr als ein halbes
            Jahr nach der ersten gemeinsamen Probe folgte der erste Auftritt.
          </p>
          <p className="mb-6 text-gray-700 dark:text-gray-300 text-lg">
            Unser Repertoire ist vom Musikstil her sehr durchmischt, wir spielen
            viel volkstümliche Musik, aber auch klassische, Film-, und
            Pop-Musik. Zu einigen Stücken haben wir{" "}
            <a
              href="https://musescore.com/user/36900198/sets/5455136"
              className="text-blue-600 hover:underline"
            >
              die Noten auf MuseScore veröffentlicht.
            </a>{" "}
            Falls Sie noch einen besseren Eindruck unseres Repertoires wollen,
            können Sie uns gerne bei unserem nächsten Konzert besuchen.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
