/**
 * Copyright 2016 IBM Corp. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

const assert = require('chai').assert;
const PersonalityTraitDescriptions = require('../src/index');

describe('names', () => {

  it('get default (English) trait description (v2): Agreeableness', () => {
    const traitDescriptions = new PersonalityTraitDescriptions();
    assert.equal(traitDescriptions.description('Agreeableness'), 'Higher: Value getting along with others. They have a more optimistic view of human nature.\nLower: Value self interests over others. They are more skeptical of others\' motives.');
    assert.equal(traitDescriptions.descriptions().length, 52);
    assert.equal(traitDescriptions.descriptions()[1], 'Higher: More self-disciplined, dutiful, or aiming for achievement against measures or outside expectations.\nLower: More likely to prefer the spontaneous over the planned.');
  });

  it('get default (English) trait description (v2): Gregariousness', () => {
    const traitDescriptions = new PersonalityTraitDescriptions();
    assert.equal(traitDescriptions.description('Gregariousness'), 'Fondness for the company of others; sociability.');
    assert.equal(traitDescriptions.descriptions().length, 52);
    assert.equal(traitDescriptions.descriptions()[5], 'Eagerness to trying new activities and experiencing new things.');
  });

  it('get English trait description (v2): Agreeableness', () => {
    const traitDescriptions = new PersonalityTraitDescriptions({ locale : 'en', 'version' : 'v2' });
    assert.equal(traitDescriptions.description('Agreeableness'), 'Higher: Value getting along with others. They have a more optimistic view of human nature.\nLower: Value self interests over others. They are more skeptical of others\' motives.');
    assert.equal(traitDescriptions.descriptions().length, 52);
    assert.equal(traitDescriptions.descriptions()[1], 'Higher: More self-disciplined, dutiful, or aiming for achievement against measures or outside expectations.\nLower: More likely to prefer the spontaneous over the planned.');
  });

  it('get English trait description (v2): Activity level', () => {
    const traitDescriptions = new PersonalityTraitDescriptions({ locale : 'en', 'version' : 'v2' });
    assert.equal(traitDescriptions.description('Activity level'), 'Pace of living; level of busyness.');
    assert.equal(traitDescriptions.descriptions().length, 52);
    assert.equal(traitDescriptions.descriptions()[15], 'Will-power; the capacity to begin tasks and follow through to completion in spite of boredom or distractions.');
  });

  it('get Spanish trait description (v2): Agreeableness', () => {
    const traitDescriptions = new PersonalityTraitDescriptions({ locale : 'es', 'version' : 'v2' });
    assert.equal(traitDescriptions.description('Agreeableness'), 'Más alto: Valoran llevarse bien con otros. Tienen una visión más optimista de la naturaleza humana. \nMás bajo: Valoran sus propios intereses por sobre los de otros. Son más escépticos de los motivos de los demás.');
    assert.equal(traitDescriptions.descriptions().length, 52);
    assert.equal(traitDescriptions.descriptions()[1], 'Más alto: Auto-disciplinados, conscientes de sus deberes, o tendientes a querer alcanzar logros por encima de las medidas o expectativas externas. \nMás bajo: Más propensos a preferir lo espontáneo por sobre lo planificado.');
  });

  it('get Spanish trait description (v2): Trust', () => {
    const traitDescriptions = new PersonalityTraitDescriptions({ locale : 'es', 'version' : 'v2' });
    assert.equal(traitDescriptions.description('Trust'), 'Nivel de creencia en la sinceridad y buenas intenciones de los demás.');
    assert.equal(traitDescriptions.descriptions().length, 52);
    assert.equal(traitDescriptions.descriptions()[50], 'Éxito personal a través de la demostración de competencia de acuerdo a estándares sociales.');
  });

  it('get Japanese trait description (v2): Agreeableness', () => {
    const traitDescriptions = new PersonalityTraitDescriptions({ locale : 'ja', 'version' : 'v2' });
    assert.equal(traitDescriptions.description('Agreeableness'), '高い人： 他人とうまくやっていくことを重要視するタイプです。人間の本性に関して楽観的な見方をしています。\n低い人： 他人より自分の興味を優先するタイプです。 他人の言葉の裏を考えてしまう傾向があります。');
    assert.equal(traitDescriptions.descriptions().length, 52);
    assert.equal(traitDescriptions.descriptions()[1], '高い人： 自己統制をし、誠実、あるいは外部の期待や評価に応えようとするタイプです。\n低い人： 計画に従うより、自発的に物事を行うことを好むタイプです。');
  });

  it('get Japanese trait description (v2): Trust', () => {
    const traitDescriptions = new PersonalityTraitDescriptions({ locale : 'ja', 'version' : 'v2' });
    assert.equal(traitDescriptions.description('Trust'), '他人から誠実さと善意に対して信頼されている度合い。');
    assert.equal(traitDescriptions.descriptions().length, 52);
    assert.equal(traitDescriptions.descriptions()[50], '社会的な基準に基づいて能力を実証することによる個人的な成功。');
  });

  // V3 tests
  it('get English trait description (v3): big5_agreeableness', () => {
    const traitDescriptions = new PersonalityTraitDescriptions({ locale : 'en', 'version' : 'v3' });
    assert.equal(traitDescriptions.description('big5_agreeableness'), 'Higher: Value getting along with others. They have a more optimistic view of human nature.\nLower: Value self interests over others. They are more skeptical of others\' motives.');
    assert.equal(traitDescriptions.descriptions().length, 52);
    assert.equal(traitDescriptions.descriptions()[1], 'Higher: More self-disciplined, dutiful, or aiming for achievement against measures or outside expectations.\nLower: More likely to prefer the spontaneous over the planned.');
  });

  it('get English trait description (v3): need_harmony', () => {
    const traitDescriptions = new PersonalityTraitDescriptions({ locale : 'en', 'version' : 'v3' });
    assert.equal(traitDescriptions.description('need_harmony'), 'A need to appreciate or please other people, their viewpoints, and feelings.');
    assert.equal(traitDescriptions.descriptions().length, 52);
    assert.equal(traitDescriptions.descriptions()[47], 'Respect, commitment, and acceptance of the customs and ideas that one\'s culture and/or religion provides.');
  });

  it('get Spanish trait description (v3): big5_agreeableness', () => {
    const traitDescriptions = new PersonalityTraitDescriptions({ locale : 'es', 'version' : 'v3' });
    assert.equal(traitDescriptions.description('big5_agreeableness'), 'Más alto: Valoran llevarse bien con otros. Tienen una visión más optimista de la naturaleza humana. \nMás bajo: Valoran sus propios intereses por sobre los de otros. Son más escépticos de los motivos de los demás.');
    assert.equal(traitDescriptions.descriptions().length, 52);
    assert.equal(traitDescriptions.descriptions()[48], 'Independencia en las acciones, los pensamientos, sentimientos y disposición a nuevas experiencias.');
  });

  it('get Spanish trait description (v3): facet_morality', () => {
    const traitDescriptions = new PersonalityTraitDescriptions({ locale : 'es', 'version' : 'v3' });
    assert.equal(traitDescriptions.description('facet_morality'), 'Franqueza y expresión genuina; cándido, franco.');
    assert.equal(traitDescriptions.descriptions().length, 52);
    assert.equal(traitDescriptions.descriptions()[29], 'Tendencia a experimentar –pero no necesariamente expresar– ira o frustración.');
  });

  it('get Japanese trait description (v3): big5_agreeableness', () => {
    const traitDescriptions = new PersonalityTraitDescriptions({ locale : 'ja', 'version' : 'v3' });
    assert.equal(traitDescriptions.description('big5_agreeableness'), '高い人： 他人とうまくやっていくことを重要視するタイプです。人間の本性に関して楽観的な見方をしています。\n低い人： 他人より自分の興味を優先するタイプです。 他人の言葉の裏を考えてしまう傾向があります。');
    assert.equal(traitDescriptions.descriptions().length, 52);
    assert.equal(traitDescriptions.descriptions()[1], '高い人： 自己統制をし、誠実、あるいは外部の期待や評価に応えようとするタイプです。\n低い人： 計画に従うより、自発的に物事を行うことを好むタイプです。');
  });

  it('get Japanese trait description (v3): need_harmony', () => {
    const traitDescriptions = new PersonalityTraitDescriptions({ locale : 'ja', 'version' : 'v3' });
    assert.equal(traitDescriptions.description('need_harmony'), '他人、彼らの見解、及びおよび感覚を高く評価したり喜ばせる必要性。');
    assert.equal(traitDescriptions.descriptions().length, 52);
    assert.equal(traitDescriptions.descriptions()[47], '文化や宗教の違いによる習慣やアイディアに対する尊敬、約束、および受け入れ。');
  });
});
