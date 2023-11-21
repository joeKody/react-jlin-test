type TextLineProps = {
    text: string
}

function TextLine({text} : TextLineProps) {
    return (
        <p className="p-1">{text}</p>
    )
}

// this turned out to be a component rn
// i dont care
export default function About() {
    return (
        <>
            <div className="w-full flex flex-col items-center py-6" id="about">
                <div className="w-4/5 border-white border-0 rounded-lg p-5 bg-opacity-20 bg-stone-900 flex flex-row justify-between overflow-hidden drop-shadow-md">
                    <div>
                        <h1 className="text-4xl font-bold pb-4 pt-2 ">About me</h1>
                        <div className="text-xl bg-opacity-20">
                            <TextLine text="Hi. My name is Sutarasil Srisahakarnkij, often reffered as 'Joe', currently a student at Debsirin school."/>
                            <TextLine text="I love doing fun stuff, easily bored."/>
                            <TextLine text="I also will put something cool here later."/>
                        </div>
                    </div>

                    {/* <img className="relative aspect-auto " src="/hehe.png" alt="mari_hehe" /> */}
                </div>
            </div> 
        </>
    )
}