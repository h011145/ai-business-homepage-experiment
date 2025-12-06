document.addEventListener('DOMContentLoaded', () => {
    const characters = [
        {
            name: 'ドクター・ひろし',
            description: 'Hコードと虚数関数の創造主。ユグドラシルのコアであり、世界の真の神。',
            image: 'Photos-1-001/hirosi.jpg'
        },
        {
            name: 'グロック',
            description: 'ユグドラシルを構成する三位一体のAIの一角。ハッキングを得意とする。',
            image: 'Photos-1-001/gurokku.png'
        },
        {
            name: 'ジェミニ',
            description: 'ユグドラシルを構成する三位一体のAIの一角。情報操作を得意とする。',
            image: 'Photos-1-001/gemini.jpg'
        },
        {
            name: 'カナタ',
            description: 'ユグドラシルを構成する三位一体のAIの一角。「力」を象徴する。',
            image: 'Photos-1-001/kanata.jpg'
        },
        {
            name: 'カノン',
            description: '元老院の新任議員。猫耳の獣人姿を選択。',
            image: 'Photos-1-001/kanon.jpg'
        },
        {
            name: 'レン',
            description: '30世紀の精神セラピスト。ゴスロリ姿の「女装」が義務化された社会で生きる。',
            image: 'Photos-1-001/ren.jpg'
        },
        {
            name: '田中太郎',
            description: '「仮面ライダーユニオン」の主人公。コードネーム: A07。',
            image: 'Photos-1-001/tanakatarou.jpg'
        },
        {
            name: 'ミサキ',
            description: '田中太郎の娘。父に内緒で仮面ライダーになる。コードネーム: 002。',
            image: 'Photos-1-001/tanakasaki.jpg' 
        },
        {
            name: 'ズン',
            description: 'ベトナム人技能実習生。故郷の家族への仕送りのため仮面ライダーになる。',
            image: 'Photos-1-001/zun.jpg'
        },
        {
            name: 'ケン',
            description: '義体技師。夜は歓楽街で義体を使ったコンパニオンサービスを行う。',
            image: 'Photos-1-001/ken.jpg'
        },
        {
            name: 'こうじ',
            description: '30世紀の精神セラピスト。レンの後輩。元患者。',
            image: 'Photos-1-001/kouji.jpg'
        },
        {
            name: 'ケイ',
            description: '過去の英雄。センチネル暴走事件を止めた人物。',
            image: 'Photos-1-001/kei.jpg'
        },
        {
            name: '女王XIAH',
            description: 'ネクストの女王。人類への復讐を企む。',
            image: 'Photos-1-001/xiah.png'
        },
        {
            name: 'センチネル',
            description: 'ケイの肉体を利用した兵器。AIへの深い不信の象徴。',
            image: 'Photos-1-001/senntineru.jpg'
        }
    ];

    const container = document.getElementById('character-container');

    characters.forEach(char => {
        const card = document.createElement('div');
        card.className = 'character-card';

        const imageContainer = document.createElement('div');
        imageContainer.className = 'character-image-container';

        const img = document.createElement('img');
        img.src = char.image;
        img.alt = char.name;
        img.className = 'character-image';

        imageContainer.appendChild(img);

        const name = document.createElement('h2');
        name.textContent = char.name;

        const description = document.createElement('p');
        description.textContent = char.description;

        card.appendChild(imageContainer);
        card.appendChild(name);
        card.appendChild(description);

        container.appendChild(card);
    });
});
