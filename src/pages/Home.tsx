// import axios from "axios";
import { useState } from "react";
import ItemsList from "../components/ItemsList";
import CategoryButtons from "../components/CategoryButtons";
import Logo from "../assets/imgs/logos/rankify-logo-green.png";
import FileUpload from "../components/FileUpload";
import { RaceBy } from "@uiball/loaders";
import Footer from "../components/Footer";

export default function Home() {
  const [inputFile, setInputFile] = useState([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [showContent, setShowContent] = useState<boolean>(false);
  const [category, setCategory] = useState("master_metadata_album_artist_name");

  return (
    <>
      <main className="min-h-screen py-8 bg-primary font-['Dosis'] font-semibold">
        <section className="flex flex-col items-center m-auto gap-8 max-w-[60rem]">
          <img src={Logo} alt="Rankify logo" width={200} />
          <FileUpload
            setInputFile={setInputFile}
            setLoading={setLoading}
            setShowContent={setShowContent}
          />
          {loading && <RaceBy size={150} color="#DAFFD6" lineWeight={6} />}
          {showContent && (
            <>
              <CategoryButtons category={category} setCategory={setCategory} />
              <ItemsList jsonData={inputFile} category={category} />
            </>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}
