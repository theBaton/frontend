def thefunction():
    import os
    import uuid
    from src.models import db
    from src import create_app
    from src.models.UserModel import User
    from src.models.BlogpostModel import Blogpost
    from src.models.EditorialModel import Editorial
    from werkzeug.security import generate_password_hash
    env_name = os.environ['FLASK_ENV']

    hashed_password = generate_password_hash("password", method='sha256')

    with create_app(env_name).app_context():
        blogpost = Blogpost(public_id = str(uuid.uuid4()), title = "Struggle for Identity: Women in Afghanistan", sub_title = "", cta_title = "The continuous resistance by Afghan Women for their Right to Life", cover_image = "https://i.imgur.com/WWRwI2k.jpeg", user_id=4, content = '''{% extends "blogpost.html" %}{% block blogpost %} <p>Women, no matter what the territorial land they reside in, have always faced suppression of their basic human rights, and continue to face the brunt of any socio-political or economic crisis. When there is a pragmatic shift in the nature of ‘governance’ or a sight of crashing economy, it is the women of a country who are subjugated to harsh humility and grave violation in the hands of this very ‘patrilineal’ society. Even if one looks beyond the scope of public sphere humiliation, we will still find women sobbing in their respective families, fighting for the smallest of necessities let alone the urge to secure the same status as the male figure. In the closed perimeter of their homes, women face emotional and physical abuse degrading their health and even the prospect of death in many cases. One such country which has failed at respecting their women over a multiple decade long crisis, is Afghanistan. From the strict contingent rules of the Soviet regime, the Radical Fundamentalists of the Islamic State to the US allied formed post-Taliban era of the early 200s, and again to the newly formed government of the Taliban in accordance with strict, ‘wrongful’ interpretation of the Sharia law; it is the Afghan women who have continuously struggled to affirm their identities and maintain their status in both public and private spheres.</p> <p>This continuous cycle of oppression and dehumanization has called for a humanitarian crisis in this war- torn nation. After the Taliban takeover, women now especially find themselves in a miserable situation, helpless to accord with their dignity and are ‘merely’ living their lives in fear of an uncertain future. Women, now, are in an even worse position that they have ever been, forcing them to live in accordance with the codified regulations set up by the insurgent organization Taliban. They are restricted in terms of their clothing as now a woman is required to cover up from head to bottom, or else they will be penalized with capital punishment. They have little to no say in her interests related to education, allowing them to be either associated with studies related to medicine or academia, or else they are required to willfully fulfill their duties of household and provide childcare. Moreover, in higher educational institutes, women and men are now forced to attend separate classes since the interaction between the two genders is treacherous in the eyes of the new Emirate. <sup><a href="#ref1">[i]</a></sup> In a century where the world is continuously progressing towards the upliftment of humanity as a whole, Taliban occupied Afghanistan fails to adhere with the principles of morality and humanism. By forcing their ‘fundamentalist’ opinions on its citizens, it is devaluing the lives of millions of its citizens residing in its territory with the optimistic hope of a better Afghanistan. </p> <p>In spite of the ruckus created in the hands of the insurgents, Afghanistan has witnessed the roaring sounds of women across its streets protesting for their rights and status. Recently, after the announcement of an all-male interim government with at least 14 of 33 members on the UNSC's terrorism blacklist</p> <p> for Afghanistan, women in Kabul protested for the adequate representation of women at higher positions of administration. <sup><a href="#ref2">[ii]</a></sup> Knowing that such rallies and protests could cost them their life, Afghan women showcased their brave demeanor against the Taliban fighters. They demanded the inclusion of rights related to women, adequate representation and their fundamental right to equality. However, such enormous voices were devalued with beatings and arrests across the region. </p> <p> The newly ‘self-acclaimed’ government with no international recognition has been rejected by most of the Afghan population. However, there are some rural territories and villages which have regarded this sudden change in power in an optimistic purview. They feel that the true essence of their country has been restored after the massive killings in the decade long war. However, at the same time, their narrative involves no value to women life, and is rather filled with misogyny and conservatism. For a nation to succeed, it is fairly important for the state authorities to provide its citizens its fundamental rights. Especially, in a country like Afghanistan, where the majority population still strives for agriculture to earn its livelihood, men and women need to be more vigilant in moving towards the ideals of education and equality. </p> <p>With the current trend in resistance against the insurgents, it is fair to say that women of this generation will continue to showcase their disagreement with the coherent provisions. Their resistance is a representation of defiance with the narrowed perspective of viewing women as ‘commodities’ in the societal set up of men regarded as the ‘superior’ race. It calls out the persisting ideals of radicalism associated to ‘religion’. Where women are very easily feared to believe that this gross discrimination (in the hands of men) as the ultimate wish of the divine power. While, in reality, such an interpretation is just used to enlighten their stature (men’s stature) next to God and has nothing to do with the true essence of any religion. The Afghan women of today, are more mindful than they were in the last Taliban period of occupation and are engrossed in this fight of resistance. And their will hopefully give them everything that they strive to acquire in the future.</p> <hr> <h6 id="sec-references"><em>References</em></h6> <ol> <li class="text-left" id="ref1">Abbasi, Fereshta. “Afghan Women Protest Against Taliban Restrictions.” Human rights Watch, 7 Sept.2021 <a href="https://www.hrw.org/news/2021/09/07/afghan-women-protest-against-taliban-restrictions">https://www.hrw.org/news/2021/09/07/afghan-women-protest-against-taliban-restrictions</a></li> <li class="text-left" id="ref2">Jett, Jenifer. “Women join protests on Kabul streets in defiance of Taliban rule.” NCN News, 7 Sept.2021. <a href="https://www.nbcnews.com/news/world/women-join-protests-kabul-streets-defiance-taliban-rule-n1278583">https://www.nbcnews.com/news/world/women-join-protests-kabul-streets-defiance-taliban-rule-n1278583</a></li> </ol> {% endblock blogpost %}''')
        db.session.add(blogpost)
        db.session.commit()

        return "cool beans"