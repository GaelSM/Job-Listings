export default function Job(props){

    const handleRole = (type) => {
        if(props.roleFilter === type) return
        props.setRole(type)
    }

    const handleLevel = (type) => {
        if(props.levelFilter === type) return
        props.setLevel(type)
    }

    const handleLenguages = (type) => {
        if(props.languagesFilter.includes(type)) return
        props.setLanguages([...props.languagesFilter, type])
    }

    const handleTools = (type) => {
        if(props.toolsFilter.includes(type)) return
        props.setTools([...props.toolsFilter, type])
    }

    return (
        <article className={props.featured ? "featured" : ""}>
            <div className="left">
                
                <img src={props.logo} alt="" />

                <div className="information">
                    <div className="company">
                        <h3> {props.company} </h3>
                        {props.new && <p className="new"> New! </p>}
                        {props.featured && <p className="featured"> FEATURED </p>}
                    </div>

                    <h2> {props.position} </h2>

                    <div className="times">
                        <p>{props.postedAt}</p>
                        <span></span>
                        <p>{props.contract}</p>
                        <span></span>
                        <p>{props.location}</p>
                    </div>
                </div>
            </div>

            <div className="right">
                <div onClick={() => handleRole(props.role)}>{props.role}</div>
                <div onClick={() => handleLevel(props.level)}>{props.level}</div>
                {props.languages.map((language, i) => <div key={i} onClick={() => handleLenguages(language)}> {language} </div>)}
                {props.tools.map((tool, i) => <div key={i} onClick={() => handleTools(tool)}> {tool} </div>)}
            </div>
        </article>
    )
}