import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {

  const photos = [
    {id: 1, url: "/images/photo1.avif", title: "Photo 1"},
    {id: 2, url: "/images/photo2.avif", title: "Photo 2"},
    {id: 3, url: "/images/photo3.avif", title: "Photo 3"},
    {id: 4, url: "/images/photo4.avif", title: "Photo 4"},
    {id: 5, url: "/images/photo5.avif", title: "Photo 5"},
    {id: 6, url: "/images/photo6.avif", title: "Photo 6"},
  ]
  return (
    <section>
      <h1>NextGram Photo Showcase</h1>
      <div className="cards-container">
        {
          photos.map((item) => (
            <Link  key={item.id} href={`/photos/${item.id}`} className="card">{item.title}</Link>
          ))
        }
      </div>
    </section>
  );
}
