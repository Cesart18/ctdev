import type { CollectionEntry } from "astro:content"

interface Props {
    project: CollectionEntry<'projects'>;
}


export const ArrowCard = ({project}:Props) => {
    const { data, slug } = project;
    const { tags, title, image, repository, webUrl } = data;
  return (
    <div className="arrow-card">
        <div className="arrow-img">
        <img src={image?.url} alt={image?.alt} width={300} height={320} loading="eager" />
        </div>
        <div className="arrow-description">
            <p>{title}</p>
        <div className="arrow-actions">
                <ul className="tag-container">
                {tags.map((tag)=> {
                return (
                    <li key={tag}>
                        <div className={"arrow-chip"}>
                            <img src={`/icons/${tag.toLocaleLowerCase()}.svg`} alt="" width={20} height={20}/>
                            <p>{tag}</p>
                        </div>
                    </li>
                )
                })}
                </ul>
                <div className="arrow-links">
                {
                    (repository)?
                    <a href={repository} className="link-chip">
                        <img src="/icons/link.svg" alt="" />
                        Repositorio</a>
                    : null
                }
                {
                    (webUrl)?
                    <a href={webUrl} className="link-chip">
                        <img src="/icons/globe-pointer.svg" alt="" />
                        
                         Visitar web</a>
                    : null
                }
                </div>
         </div>
        </div>
    </div>
  )
}
