import type { CollectionEntry } from "astro:content"
import '../style/arrowCard.css';

interface Props {
    project: CollectionEntry<'projects'>;
}


export const ArrowCard = ({project}:Props) => {
    const { data, slug, collection } = project;
    const { tags, title, image, repository, webUrl } = data;
  return (
    <div className="arrow-card" >
        <a href={`/${collection}/${slug}/`} className="arrow-img">
        <img src={image?.url} alt={image?.alt} width={300} height={320} loading="eager" />
        </a>
        <div className="arrow-description">


            <div className="arrow-info">
                <h4>{title}</h4>
                {
                    <ul className="tag-container">
                    {tags.map((tag)=> {
                        return (
                            <li key={tag}>
                                <div className={"chip"} >
                                    <img src={`/icons/${tag.toLocaleLowerCase()}.svg`} alt="" width={20} height={20}/>
                                    <p>{tag}</p>
                                </div>
                            </li>
                        )
                    })}
                </ul>
                }
                <div className="arrow-links">

                {
                    (repository)
                    ? <a href={repository} target="_blank" className="btn-secondary">
                        <img src="/icons/link.svg" alt="Ir al repositorio" />
                        <p>Repositorio</p>
                    </a>
                    : null

                }


                {
                    (webUrl)
                    ? <a href={webUrl} target="_blank" className="btn-secondary" >
                        <img src="/icons/globe-pointer.svg" alt="Ir al sitio web" />
                        <p>Visitar Web</p>
                    </a>
                    : null

                }

                </div>
            </div>


        </div>
    </div>
  )
}
