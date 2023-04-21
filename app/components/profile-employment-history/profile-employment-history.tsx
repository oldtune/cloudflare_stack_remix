import Tooltip from "../tooltip/tooltip";

export default function EmploymentHistory() {
    return (
        <div>
            <div className="text-xl mt-2 font-bold">Employment History</div>
            <div className="mb-2">
                <Tooltip title="Saigon Technology">
                    <img className="border rounded-full w-5 cursor-pointer inline-block" src="/sts.png" /> </Tooltip>
                <span className="text-lg"> Senior Developer at Saigon Technology (2021 - Present)</span> I'm having fun here.
            </div>

            <div className="mb-2">
                <Tooltip title="Relationshop" >
                    <img className="border rounded-full w-5 cursor-pointer inline-block" src="/relationshop.png" />
                </Tooltip>
                <span className="text-lg"> Junior .NET Developer (2020 - 2021)</span>
                <div>Working as a full time developer to contribute to their E-Commerce platform. I learnt a lot</div>
            </div>

            <div className="mb-2"><Tooltip title="NOIS" >
                <img className="border rounded-full w-5 cursor-pointer inline-block" src="/nois.png" />
            </Tooltip>
                <span className="text-lg"> Fresher Developer at NOIS (2019 - 2020)</span>
                <div>I had a tough time here because i was lacking experience, but got time to adapt and had fun</div>
            </div>

            <div className="mb-2">
                <Tooltip title="CMC SISG" >
                    <img className="border rounded-full w-5 cursor-pointer inline-block" src="/cmc-sisg.png" />
                </Tooltip>
                <span className="text-lg"> Intern at CMC SISG (2018 - 2019)</span>
                <div>I made my first buck here. Still happy i took the offer, I got the money to upgraded my laptop to build the foundation for everything</div>
            </div>
        </div >
    );
}