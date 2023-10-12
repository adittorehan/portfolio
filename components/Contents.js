import { useState } from "react";

import styles from "../styles/Contents.module.css";
import Tab from "./Tab";

export default function Contents() {
    const [selectedTab, setSelectedTab] = useState("About");
    const tabs = ["About", "Resume", "Work", "Contact"];

    return (
        <div className={styles.container}>
            <div className={styles.tabsContainer}>
                {
                    tabs.map(
                        tab => <Tab key={tab} name={tab} selectedTab={selectedTab} handleOnClick={setSelectedTab} />
                    )
                }
            </div>

            <div className={styles.contentContainer}>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis cupiditate ea corporis asperiores quaerat maiores! Magnam cumque architecto ratione corrupti! Odit corporis mollitia vel dolor illo ab quam sit laboriosam autem ducimus unde ipsam ipsa, exercitationem eveniet. Quaerat saepe repellendus eum ipsam cumque doloremque ab, ex deleniti, delectus accusantium nulla labore nobis suscipit cupiditate laudantium sed sit? Magni libero similique laboriosam tempore! Optio aliquam voluptate, iusto iste eum vel exercitationem sequi neque soluta! Exercitationem voluptatum placeat, in esse nesciunt, odio harum ut eius eligendi repudiandae sed quas recusandae voluptas aperiam nisi delectus adipisci. Nulla similique laborum cumque amet sint animi consequatur! Voluptatum inventore odit veniam. Nostrum hic sapiente dignissimos deleniti cumque? Nemo ab suscipit esse commodi libero aperiam reiciendis doloribus nam id beatae tenetur amet veritatis vitae fugit soluta dolorum, harum, impedit sint voluptatum sapiente. Rem suscipit quam molestiae quas dolorum distinctio provident, necessitatibus minus nesciunt labore hic repellat ex pariatur libero dicta neque facilis incidunt quasi. Accusantium incidunt ipsum amet totam tempora laudantium quia facere omnis aut cum asperiores, obcaecati labore animi, est id ea voluptatem temporibus dolores nemo quos pariatur, quas necessitatibus. Beatae, porro. Iure voluptates repellendus natus odit dolorum, corporis quia tempore harum consectetur expedita ipsa veniam reprehenderit quaerat sapiente dignissimos, nobis dolorem tempora exercitationem fuga placeat! Illum quo totam molestias nam eum rem perspiciatis repellendus assumenda itaque, sed beatae animi vero voluptates, tempore omnis impedit, labore doloremque maxime dolore? Natus illo mollitia blanditiis earum sed laborum magnam accusantium sequi similique soluta saepe quisquam voluptatum architecto eaque, pariatur dolorum doloremque quos rerum! Commodi voluptatum dicta soluta nihil cum facere dolor perferendis molestiae id nobis nostrum reiciendis, ipsam architecto veniam magnam veritatis repudiandae odio saepe, sed rerum ullam iste velit tempora ipsa. Architecto a quisquam saepe minima optio cupiditate nulla odit, deleniti iure atque neque perferendis assumenda qui sed. Et, blanditiis. Repellat voluptas quae, maxime molestiae eaque earum laborum animi cum quas neque. Cum quaerat exercitationem maxime culpa qui fugiat fuga facilis animi harum veniam eos hic quod ea, nemo tenetur asperiores eaque quas reprehenderit quidem sunt odit. Recusandae omnis tempora nobis quod sapiente, aut obcaecati ipsa laborum rem voluptatibus voluptatum minus consectetur aperiam quos quis deserunt adipisci alias. Corrupti veniam illo ab dolor exercitationem explicabo adipisci repellat. Fugiat, nulla, adipisci fugit neque provident aliquam obcaecati assumenda corrupti aspernatur sit nostrum quae debitis culpa tenetur. Eum pariatur sint laudantium cupiditate quia quisquam unde veritatis suscipit mollitia, omnis aperiam, obcaecati consequatur fugiat expedita, beatae corporis. Dicta eligendi deleniti maxime at recusandae, sequi fugiat ad impedit sunt, praesentium veniam dolores tempore tempora et rem laborum nulla! Temporibus, magnam laboriosam? Mollitia iusto optio obcaecati nesciunt repellat vel, quisquam repudiandae voluptatem! Laborum modi expedita odit eveniet ipsum repellendus deserunt enim fugit, omnis, nisi magnam! Provident, dignissimos commodi, vitae quisquam itaque dolores repellendus doloremque, autem eaque accusamus rerum voluptates! Atque, perferendis excepturi eaque provident itaque fugit incidunt nisi sint temporibus quis dolorem, id cum odio sequi et nam praesentium porro quo fuga error quia asperiores? Totam quos velit rerum neque. Doloremque nobis aut aspernatur, accusantium nostrum rerum numquam, magnam, alias ipsa iure officia ipsam consequuntur. Neque voluptatum velit voluptatibus natus accusamus ipsum modi repudiandae quo rem qui distinctio facere quidem provident quam quia autem, iure, inventore necessitatibus et ullam veniam fuga numquam commodi odit! Odit et, animi laboriosam vitae possimus veniam impedit consectetur ea neque vero qui obcaecati ratione laudantium expedita, quod provident? Culpa aperiam suscipit iste. Delectus modi et itaque quas facilis deleniti sint doloremque rem voluptas necessitatibus nam harum expedita, velit repellat! Quas, aliquid excepturi, eveniet quaerat veniam consectetur perferendis blanditiis doloremque aut voluptas distinctio sint amet ipsa fugit quis? Ex repellendus quibusdam repudiandae deleniti quis maiores omnis quae dolor, harum fugit quisquam eos quaerat sint odit quia et aut asperiores hic aliquam architecto quod ipsum ab nisi. Architecto adipisci sunt labore, dolores aperiam alias est, ipsum, id ducimus fugit illo recusandae suscipit similique consequuntur aliquid fuga ea! Adipisci distinctio aliquam enim sequi ipsa atque inventore quo? Sunt id facere adipisci quae aliquid itaque esse dolore atque placeat magnam ducimus fugit necessitatibus non molestiae voluptatem suscipit eum, recusandae delectus numquam. Minima error nemo libero nulla qui dolorum ducimus veritatis nam cupiditate omnis, aperiam cum magni beatae accusantium quasi illo expedita molestiae assumenda voluptatum officiis neque itaque? Nulla fugit optio delectus quae dolore incidunt? Distinctio consectetur enim impedit, quaerat iste excepturi aspernatur nostrum culpa dignissimos? Doloribus in autem cum dolorem, iure esse fuga facere fugiat possimus ab quo molestiae sequi consectetur ut pariatur quaerat minus eius adipisci quis commodi fugit similique. Voluptatum repudiandae perferendis inventore ullam labore magnam vel debitis consequuntur aut, tempora quisquam sed, architecto cumque blanditiis praesentium ipsam, doloribus sint libero commodi expedita iste consectetur? Eveniet, eligendi excepturi voluptates amet a suscipit eos reiciendis dolor atque veritatis doloribus assumenda et, provident totam porro velit doloremque aliquam incidunt sit aut distinctio! Earum error neque alias enim nesciunt porro sed qui assumenda eveniet dolore voluptatem, est vel laboriosam. Fugit assumenda aut, quaerat neque porro molestias. Dolorum esse molestias consectetur a repudiandae id hic accusantium officia culpa quo debitis repellendus rem ipsa in, fuga iste laboriosam ea sit nemo ad asperiores sed similique assumenda! Et adipisci enim atque fugit blanditiis dolorem placeat sed non, soluta officia? Illo laborum reiciendis officia non excepturi consequatur voluptate aliquam, facilis minus, molestiae et. Consectetur ipsum voluptates eligendi incidunt! Sunt sed eaque voluptas recusandae exercitationem delectus dolorem unde perferendis accusamus, sapiente autem ullam magnam quasi atque debitis repellendus rem qui, itaque quibusdam vitae eligendi quis accusantium sint porro. Sapiente vero nulla repellat incidunt corporis quisquam voluptate omnis in recusandae, suscipit libero animi voluptatibus, obcaecati consectetur alias id delectus nihil perspiciatis modi iure. Quo alias itaque id eaque, ad iure labore dolorem consectetur qui suscipit! Saepe, accusantium qui. Cum enim voluptatibus, deleniti beatae, sed necessitatibus a quo soluta ullam minima quia ratione! Est illo officiis ullam quaerat magni nam saepe molestias culpa? A voluptates atque ex facilis asperiores neque quia accusamus necessitatibus maxime, quos, officiis harum veniam mollitia consectetur ducimus nisi laudantium accusantium quod modi tempora laborum cumque. Necessitatibus!
                </p>
            </div>
        </div>
    )
}