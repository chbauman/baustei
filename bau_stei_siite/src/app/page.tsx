import Agenda from "./agenda";
import Cover from "./cover";
import Footer from "./footer";
import SectionHeading from "./heading";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Cover />
      <main className="flex-grow">
        <div className="max-w-5xl mx-auto px-4">
          <SectionHeading title="Agenda" />
          <Agenda />
        </div>
      </main>
      <Footer />
    </div>
  );
}
