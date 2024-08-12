import type { CollectionEntry } from "astro:content"
import '../style/projectCard.css';
import { filteredTag } from "../consts";

interface Props {
    project: CollectionEntry<'projects'>;
}
export const ProjectCard = ({project}:Props) => {
    const { data, slug, collection } = project;
    const { tags, title, image, repository, webUrl } = data;
  return (
    <div className="arrow-card" >
        <a href={`/${collection}/${slug}/`} className="arrow-img">
        <img src={image?.url} alt={image?.alt} width={300} height={180} loading="eager" />
        </a>
        <div className="arrow-description">

            <div className="arrow-info">
                <h3>{title}</h3>
                {
                    <ul className="tag-container">
                    {tags.map((tag : string)=> {
                        const skill = filteredTag(tag);
                        return (
                            <li key={skill?.NAME}>
                                <a className={"chip"} href={skill?.HREF} target="_blank">
                                    <img src={`/icons/${skill?.NAME.toLocaleLowerCase()}.svg`} alt="" width={20} height={20}/>
                                    <p>{skill?.NAME}</p>
                                </a>
                            </li>
                        )
                    })}
                </ul>
                }
                <div className="arrow-links">

                {
                    (repository)
                    ? <a href={repository} target="_blank" className="btn-secondary">
                        <img src="/icons/link.svg" alt="Ir al repositorio" width={20} height={20} loading="eager"/>
                        <p>Repositorio</p>
                    </a>
                    : null

                }


                {
                    (webUrl)
                    ? <a href={webUrl} target="_blank" className="btn-secondary" >
                        <img src="/icons/globe-pointer.svg" alt="Ir al sitio web" width={20} height={20} loading="eager" />
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
