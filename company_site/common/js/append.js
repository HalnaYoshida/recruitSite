// 要素を追加する関数
function addTerm(buttonId) {
	let content;
	let targetClass;

	// ボタンのIDに応じた内容を定義
	switch (buttonId) {
		case 'add01':
			targetClass = 'termArea01';
			content = `
				<div class="terms">
			<div class="selectSet">
				<div class="flexSelect">
					<span class="md_select">
						<select name="" id="" class="form--line">
							<option value="1">法学・政策系</option>
							<option value="">選択してください</option>
							<option value="2">経済・経営・商学系</option>
						</select>
					</span>
					<span class="text">の学生を</span>
					<span class="md_select">
						<select name="" id="" class="form--line">
							<option value="">含む</option>
							<option value="">含まない</option>
						</select>
					</span>
				</div>
			</div>
			<button class="deleteArea">
				<span class="iconImgPart">
					<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1024 1024" style="enable-background:new 0 0 1024 1024;" xml:space="preserve">
						<path class="st0" d="M939.5,1027.5L512,600L84.5,1027.5l-88-88L424,512L-3.5,84.5l88-88L512,424L939.5-3.5l88,88L600,512l427.5,427.5L939.5,1027.5z" style="fill:#c2c6ce;"></path>
					</svg>
				</span>
			</button>
		</div>
		<div class="terms">
			<div class="selectSet">
				<div class="flexSelect">
					<span class="md_select">
						<select name="" id="" class="form--line">
							<option value="2">経済・経営・商学系</option>
							<option value="1">法学・政策系</option>
							<option value="">選択してください</option>
						</select>
					</span>
					<span class="text">の学生を</span>
					<span class="md_select">
						<select name="" id="" class="form--line">
							<option value="">含む</option>
							<option value="">含まない</option>
						</select>
					</span>
				</div>
			</div>
			<button class="deleteArea">
				<span class="iconImgPart">
					<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1024 1024" style="enable-background:new 0 0 1024 1024;" xml:space="preserve">
						<path class="st0" d="M939.5,1027.5L512,600L84.5,1027.5l-88-88L424,512L-3.5,84.5l88-88L512,424L939.5-3.5l88,88L600,512l427.5,427.5L939.5,1027.5z" style="fill:#c2c6ce;"></path>
					</svg>
				</span>
			</button>
		</div>
			`;
			break;
		case 'add02':
			targetClass = 'termArea02';
			content = `
				<div class="terms">
					<div class="selectSet">
						<div class="flexSelect">
							<span class="md_select">
								<select name="" id="" class="form--line">
									<option value="2048">インターネット・WEB・アプリ</option>
									<option value="">選択してください</option>
									<option value="32">通信・システム・ソフトウェア</option>
									<option value="64">広告・メディア・マーケティング</option>
									<option value="2">メーカー </option>
									<option value="1">総合商社・専門商社</option>
									<option value="16">金融</option>
									<option value="4">不動産・建設・ディベロッパー</option>
									<option value="128">インフラ・交通・物流</option>
									<option value="256">人材・教育</option>
									<option value="8">コンサル・シンクタンク</option>
									<option value="512">サービス・観光</option>
									<option value="1024">⼩売・流通</option>
									<option value="4096">医療・福祉</option>
									<option value="8192">エンタメ・ゲーム</option>
									<option value="16384">官公庁・公職・団体</option>
									<option value="32768">未定または業界にこだわらない</option>
								</select>
							</span>
							<span class="text">を志望している学生を</span>
							<span class="md_select">
								<select name="" id="" class="form--line">
									<option value="">含む</option>
									<option value="">含まない</option>
								</select>
							</span>
						</div>
					</div>
					<button class="deleteArea">
						<span class="iconImgPart">
							<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1024 1024" style="enable-background:new 0 0 1024 1024;" xml:space="preserve">
								<path class="st0" d="M939.5,1027.5L512,600L84.5,1027.5l-88-88L424,512L-3.5,84.5l88-88L512,424L939.5-3.5l88,88L600,512  l427.5,427.5L939.5,1027.5z" style="fill:#c2c6ce;"></path>
							</svg>
						</span>
					</button>
				</div>
				<div class="terms">
					<div class="selectSet">
						<div class="flexSelect">
							<span class="md_select">
								<select name="" id="" class="form--line">
								    <option value="32">通信・システム・ソフトウェア</option>
									<option value="2048">インターネット・WEB・アプリ</option>
									<option value="">選択してください</option>
									<option value="64">広告・メディア・マーケティング</option>
									<option value="2">メーカー </option>
									<option value="1">総合商社・専門商社</option>
									<option value="16">金融</option>
									<option value="4">不動産・建設・ディベロッパー</option>
									<option value="128">インフラ・交通・物流</option>
									<option value="256">人材・教育</option>
									<option value="8">コンサル・シンクタンク</option>
									<option value="512">サービス・観光</option>
									<option value="1024">⼩売・流通</option>
									<option value="4096">医療・福祉</option>
									<option value="8192">エンタメ・ゲーム</option>
									<option value="16384">官公庁・公職・団体</option>
									<option value="32768">未定または業界にこだわらない</option>
								</select>
							</span>
							<span class="text">を志望している学生を</span>
							<span class="md_select">
								<select name="" id="" class="form--line">
									<option value="">含む</option>
									<option value="">含まない</option>
								</select>
							</span>
						</div>
					</div>
					<button class="deleteArea">
						<span class="iconImgPart">
							<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1024 1024" style="enable-background:new 0 0 1024 1024;" xml:space="preserve">
								<path class="st0" d="M939.5,1027.5L512,600L84.5,1027.5l-88-88L424,512L-3.5,84.5l88-88L512,424L939.5-3.5l88,88L600,512  l427.5,427.5L939.5,1027.5z" style="fill:#c2c6ce;"></path>
							</svg>
						</span>
					</button>
				</div>
			`;
			break;
			case 'add03':
			targetClass = 'termArea03';
			content = `
				<div class="terms">
					<div class="selectSet">
						<div class="flexSelect">
							<span class="md_select">
								<select name="" id="" class="form--line">
									<option value="2048">インターネット・WEB・アプリ</option>
									<option value="">選択してください</option>
									<option value="32">通信・システム・ソフトウェア</option>
									<option value="64">広告・メディア・マーケティング</option>
									<option value="2">メーカー </option>
									<option value="1">総合商社・専門商社</option>
									<option value="16">金融</option>
									<option value="4">不動産・建設・ディベロッパー</option>
									<option value="128">インフラ・交通・物流</option>
									<option value="256">人材・教育</option>
									<option value="8">コンサル・シンクタンク</option>
									<option value="512">サービス・観光</option>
									<option value="1024">⼩売・流通</option>
									<option value="4096">医療・福祉</option>
									<option value="8192">エンタメ・ゲーム</option>
									<option value="16384">官公庁・公職・団体</option>
									<option value="32768">未定または業界にこだわらない</option>
								</select>
							</span>
							<span class="text">を志望している学生を</span>
							<span class="md_select">
								<select name="" id="" class="form--line">
									<option value="">含む</option>
									<option value="">含まない</option>
								</select>
							</span>
						</div>
					</div>
					<button class="deleteArea">
						<span class="iconImgPart">
							<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1024 1024" style="enable-background:new 0 0 1024 1024;" xml:space="preserve">
								<path class="st0" d="M939.5,1027.5L512,600L84.5,1027.5l-88-88L424,512L-3.5,84.5l88-88L512,424L939.5-3.5l88,88L600,512  l427.5,427.5L939.5,1027.5z" style="fill:#c2c6ce;"></path>
							</svg>
						</span>
					</button>
				</div>
				<div class="terms">
					<div class="selectSet">
						<div class="flexSelect">
							<span class="md_select">
								<select name="" id="" class="form--line">
								    <option value="32">通信・システム・ソフトウェア</option>
									<option value="2048">インターネット・WEB・アプリ</option>
									<option value="">選択してください</option>
									<option value="64">広告・メディア・マーケティング</option>
									<option value="2">メーカー </option>
									<option value="1">総合商社・専門商社</option>
									<option value="16">金融</option>
									<option value="4">不動産・建設・ディベロッパー</option>
									<option value="128">インフラ・交通・物流</option>
									<option value="256">人材・教育</option>
									<option value="8">コンサル・シンクタンク</option>
									<option value="512">サービス・観光</option>
									<option value="1024">⼩売・流通</option>
									<option value="4096">医療・福祉</option>
									<option value="8192">エンタメ・ゲーム</option>
									<option value="16384">官公庁・公職・団体</option>
									<option value="32768">未定または業界にこだわらない</option>
								</select>
							</span>
							<span class="text">を志望している学生を</span>
							<span class="md_select">
								<select name="" id="" class="form--line">
									<option value="">含む</option>
									<option value="">含まない</option>
								</select>
							</span>
						</div>
					</div>
					<button class="deleteArea">
						<span class="iconImgPart">
							<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1024 1024" style="enable-background:new 0 0 1024 1024;" xml:space="preserve">
								<path class="st0" d="M939.5,1027.5L512,600L84.5,1027.5l-88-88L424,512L-3.5,84.5l88-88L512,424L939.5-3.5l88,88L600,512  l427.5,427.5L939.5,1027.5z" style="fill:#c2c6ce;"></path>
							</svg>
						</span>
					</button>
				</div>
			`;
			break;
			case 'add04':
			targetClass = 'termArea04';
			content = `
				<div class="terms">
					<div class="selectSet">
						<div class="flexSelect">
							<span class="md_select">
								<select name="" id="" class="form--line">
									<option value="1">営業</option>
									<option value="">選択してください</option>
									<option value="2">企画・マーケティング</option>
									<option value="4">クリエイティブ（ライター・デザイナーなど）</option>
									<option value="8">WEBディレクター・プロダクトマネージャー</option>
									<option value="128">ITエンジニア・プログラマー</option>
									<option value="256">WEB・UI/UXデザイナー</option>
									<option value="16">研究・技術・開発</option>
									<option value="32">コーポレート（⼈事・法務・経理など）</option>
									<option value="64">専⾨・資格職</option>
									<option value="512">未定または職種にこだわらない</option>
								</select>
							</span>
							<span class="text">を志望している学生を</span>
							<span class="md_select">
								<select name="" id="" class="form--line">
									<option value="">含む</option>
									<option value="">含まない</option>
								</select>
							</span>
						</div>
					</div>
					<button class="deleteArea">
						<span class="iconImgPart">
							<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1024 1024" style="enable-background:new 0 0 1024 1024;" xml:space="preserve">
								<path class="st0" d="M939.5,1027.5L512,600L84.5,1027.5l-88-88L424,512L-3.5,84.5l88-88L512,424L939.5-3.5l88,88L600,512  l427.5,427.5L939.5,1027.5z" style="fill:#c2c6ce;"></path>
							</svg>
						</span>
					</button>
				</div>
				<div class="terms">
					<div class="selectSet">
						<div class="flexSelect">
							<span class="md_select">
								<select name="" id="" class="form--line">
									<option value="2">企画・マーケティング</option>
									<option value="1">営業</option>
									<option value="">選択してください</option>
									<option value="4">クリエイティブ（ライター・デザイナーなど）</option>
									<option value="8">WEBディレクター・プロダクトマネージャー</option>
									<option value="128">ITエンジニア・プログラマー</option>
									<option value="256">WEB・UI/UXデザイナー</option>
									<option value="16">研究・技術・開発</option>
									<option value="32">コーポレート（⼈事・法務・経理など）</option>
									<option value="64">専⾨・資格職</option>
									<option value="512">未定または職種にこだわらない</option>
								</select>
							</span>
							<span class="text">を志望している学生を</span>
							<span class="md_select">
								<select name="" id="" class="form--line">
									<option value="">含む</option>
									<option value="">含まない</option>
								</select>
							</span>
						</div>
					</div>
					<button class="deleteArea">
						<span class="iconImgPart">
							<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1024 1024" style="enable-background:new 0 0 1024 1024;" xml:space="preserve">
								<path class="st0" d="M939.5,1027.5L512,600L84.5,1027.5l-88-88L424,512L-3.5,84.5l88-88L512,424L939.5-3.5l88,88L600,512  l427.5,427.5L939.5,1027.5z" style="fill:#c2c6ce;"></path>
							</svg>
						</span>
					</button>
				</div>
			`;
			break;
			case 'add05':
			targetClass = 'termArea05';
			content = `
				<div class="terms">
					<div class="selectSet">
						<div class="flexSelect">
							<span class="md_select">
								<select name="" id="" class="form--line">
									<option value="1">営業</option>
									<option value="">選択してください</option>
									<option value="2">企画・マーケティング</option>
									<option value="4">クリエイティブ（ライター・デザイナーなど）</option>
									<option value="8">WEBディレクター・プロダクトマネージャー</option>
									<option value="128">ITエンジニア・プログラマー</option>
									<option value="256">WEB・UI/UXデザイナー</option>
									<option value="16">研究・技術・開発</option>
									<option value="32">コーポレート（⼈事・法務・経理など）</option>
									<option value="64">専⾨・資格職</option>
									<option value="512">未定または職種にこだわらない</option>
								</select>
							</span>
							<span class="text">を志望している学生を</span>
							<span class="md_select">
								<select name="" id="" class="form--line">
									<option value="">含む</option>
									<option value="">含まない</option>
								</select>
							</span>
						</div>
					</div>
					<button class="deleteArea">
						<span class="iconImgPart">
							<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1024 1024" style="enable-background:new 0 0 1024 1024;" xml:space="preserve">
								<path class="st0" d="M939.5,1027.5L512,600L84.5,1027.5l-88-88L424,512L-3.5,84.5l88-88L512,424L939.5-3.5l88,88L600,512  l427.5,427.5L939.5,1027.5z" style="fill:#c2c6ce;"></path>
							</svg>
						</span>
					</button>
				</div>
				<div class="terms">
					<div class="selectSet">
						<div class="flexSelect">
							<span class="md_select">
								<select name="" id="" class="form--line">
									<option value="2">企画・マーケティング</option>
									<option value="1">営業</option>
									<option value="">選択してください</option>
									<option value="4">クリエイティブ（ライター・デザイナーなど）</option>
									<option value="8">WEBディレクター・プロダクトマネージャー</option>
									<option value="128">ITエンジニア・プログラマー</option>
									<option value="256">WEB・UI/UXデザイナー</option>
									<option value="16">研究・技術・開発</option>
									<option value="32">コーポレート（⼈事・法務・経理など）</option>
									<option value="64">専⾨・資格職</option>
									<option value="512">未定または職種にこだわらない</option>
								</select>
							</span>
							<span class="text">を志望している学生を</span>
							<span class="md_select">
								<select name="" id="" class="form--line">
									<option value="">含む</option>
									<option value="">含まない</option>
								</select>
							</span>
						</div>
					</div>
					<button class="deleteArea">
						<span class="iconImgPart">
							<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1024 1024" style="enable-background:new 0 0 1024 1024;" xml:space="preserve">
								<path class="st0" d="M939.5,1027.5L512,600L84.5,1027.5l-88-88L424,512L-3.5,84.5l88-88L512,424L939.5-3.5l88,88L600,512  l427.5,427.5L939.5,1027.5z" style="fill:#c2c6ce;"></path>
							</svg>
						</span>
					</button>
				</div>
			`;
			break;
			case 'add06':
			targetClass = 'termArea06';
			content = `
				<div class="terms">
					<div class="selectSet">
						<div class="flexSelect">
							<span class="md_select">
								<select name="" id="" class="form--line">
									<option value="1">ソーシャルビジネスで社会問題を解決</option>
									<option value="">選択してください</option>
									<option value="2">起業家を多く輩出</option>
									<option value="4">研修制度が充実</option>
									<option value="8">特定領域のパイオニア</option>
									<option value="16">理念経営</option>
									<option value="32">投資家が注⽬・資⾦調達済み</option>
									<option value="64">世界で唯一のチャレンジをしている</option>
									<option value="128">○○Tech・○aaS・DX推進</option>
									<option value="256">特許技術を持っている</option>
									<option value="512"> 新しいビジネスモデルを創造</option>
									<option value="1024">⼊社3年以内に億単位プロジェクト参画</option>
									<option value="2048">海外事業に注力</option>
									<option value="4096">ワークライフバランス重視</option>
									<option value="65536">ワークとライフどっちも全⼒</option>
									<option value="131072">多様なライフステージの社員が活躍</option>
									<option value="262144">魅⼒的な経営陣がリード</option>
									<option value="16384">新規事業⽴ち上げ・グロースに従事</option>
									<option value="8192">20代で海外赴任ができる</option>
									<option value="524288">幅広い職種にチャレンジができる</option>
									<option value="32768">専門職でキャリアアップ</option>
									<option value="1048576">実⼒主義・フラットな雰囲気</option>
								</select>
							</span>
							<span class="text">を志望している学生を</span>
							<span class="md_select">
								<select name="" id="" class="form--line">
									<option value="">含む</option>
									<option value="">含まない</option>
								</select>
							</span>
						</div>
					</div>
					<button class="deleteArea">
						<span class="iconImgPart">
							<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1024 1024" style="enable-background:new 0 0 1024 1024;" xml:space="preserve">
								<path class="st0" d="M939.5,1027.5L512,600L84.5,1027.5l-88-88L424,512L-3.5,84.5l88-88L512,424L939.5-3.5l88,88L600,512  l427.5,427.5L939.5,1027.5z" style="fill:#c2c6ce;"></path>
							</svg>
						</span>
					</button>
				</div>
				<div class="terms">
					<div class="selectSet">
						<div class="flexSelect">
							<span class="md_select">
								<select name="" id="" class="form--line">
									<option value="2">起業家を多く輩出</option>
									<option value="1">ソーシャルビジネスで社会問題を解決</option>
									<option value="">選択してください</option>
									<option value="4">研修制度が充実</option>
									<option value="8">特定領域のパイオニア</option>
									<option value="16">理念経営</option>
									<option value="32">投資家が注⽬・資⾦調達済み</option>
									<option value="64">世界で唯一のチャレンジをしている</option>
									<option value="128">○○Tech・○aaS・DX推進</option>
									<option value="256">特許技術を持っている</option>
									<option value="512"> 新しいビジネスモデルを創造</option>
									<option value="1024">⼊社3年以内に億単位プロジェクト参画</option>
									<option value="2048">海外事業に注力</option>
									<option value="4096">ワークライフバランス重視</option>
									<option value="65536">ワークとライフどっちも全⼒</option>
									<option value="131072">多様なライフステージの社員が活躍</option>
									<option value="262144">魅⼒的な経営陣がリード</option>
									<option value="16384">新規事業⽴ち上げ・グロースに従事</option>
									<option value="8192">20代で海外赴任ができる</option>
									<option value="524288">幅広い職種にチャレンジができる</option>
									<option value="32768">専門職でキャリアアップ</option>
									<option value="1048576">実⼒主義・フラットな雰囲気</option>
								</select>
							</span>
							<span class="text">を志望している学生を</span>
							<span class="md_select">
								<select name="" id="" class="form--line">
									<option value="">含む</option>
									<option value="">含まない</option>
								</select>
							</span>
						</div>
					</div>
					<button class="deleteArea">
						<span class="iconImgPart">
							<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1024 1024" style="enable-background:new 0 0 1024 1024;" xml:space="preserve">
								<path class="st0" d="M939.5,1027.5L512,600L84.5,1027.5l-88-88L424,512L-3.5,84.5l88-88L512,424L939.5-3.5l88,88L600,512  l427.5,427.5L939.5,1027.5z" style="fill:#c2c6ce;"></path>
							</svg>
						</span>
					</button>
				</div>
			`;
			break;
			case 'add07':
			targetClass = 'termArea07';
			content = `
				<div class="terms">
					<div class="selectSet">
						<div class="flexSelect">
							<span class="md_select">
								<select name="" id="" class="form--line">
									<option value="1" data-select="1" >主体性（偏差値）</option>
									<option value="">選択してください</option>
									<option value="2" data-select="1" >変革性（偏差値）</option>
									<option value="3" data-select="1" >外向性（偏差値）</option>
									<option value="4" data-select="1" >持続性（偏差値）</option>
									<option value="5" data-select="1" >協調性（偏差値）</option>
									<option value="6" data-select="1" >発想性（偏差値）</option>
									<option value="7" data-select="1" >論理性（偏差値）</option>
									<option value="8" data-select="1" >意思伝達力（偏差値）</option>
									<option value="9" data-select="1" >論理的表現力（偏差値）</option>
									<option value="10" data-select="1" >好感表現力（偏差値）</option>
									<option value="11" data-select="1" >対人調和力（偏差値）</option>
									<option value="12" data-select="1" >行動性（偏差値）</option>
									<option value="13" data-select="1" >競争性（偏差値）</option>
									<option value="14" data-select="1" >野心性（偏差値）</option>
									<option value="15" data-select="1" >決断性（偏差値）</option>
									<option value="16" data-select="2" >人付き合いへのストレス耐性（満点100）</option>
									<option value="17" data-select="2" >仕事の負荷量へのストレス耐性（満点100）</option>
									<option value="18" data-select="2" >理想と現実のギャップへのストレス耐性（満点100）</option>
									<option value="19" data-select="2" >評価・評判へのストレス耐性（満点100）</option>
									<option value="20" data-select="2" >経営幹部指向（満点100）</option>
									<option value="21" data-select="2" >アントレプレナー指向（満点100）</option>
									<option value="22" data-select="2" >チャレンジャー指向（満点100）</option>
									<option value="23" data-select="2" >自立指向（満点100）</option>
									<option value="24" data-select="2" >スペシャリスト指向（満点100）</option>
									<option value="25" data-select="2" >安定指向（満点100）</option>
									<option value="26" data-select="2" >私生活重視（満点100）</option>
									<option value="27" data-select="2" >社会奉仕指向（満点100）</option>
									<option value="28" data-select="3" >多くの人と接し、サービスする（最大5）</option>
									<option value="29" data-select="3" >他者と連携・協調していく（最大5）</option>
									<option value="30" data-select="3" >専門性を身につけ、活かす（最大5）</option>
									<option value="31" data-select="3" >正確かつ着実に進める（最大5）</option>
									<option value="32" data-select="3" >新しいアイデアを生み出す（最大5）</option>
									<option value="33" data-select="3" >知識を深め、探究していく（最大5）</option>
									<option value="34" data-select="3" >自分の判断で自律的に進める（最大5）</option>
									<option value="35" data-select="3" >基本に従い定型的に進める（最大5）</option>
									<option value="36" data-select="3" >迅速に判断して進める（最大5）</option>
									<option value="37" data-select="3" >合理的に物事を進める（最大5）</option>
								</select>
							</span>				
							<span class="md_select">
								<select name="" id="" class="form--line">
									<option value=""></option>
									<option value="">30</option>
									<option value="">35</option>
									<option value="">40</option>
									<option value="">45</option>
									<option value="">50</option>
									<option value="">55</option>
									<option value="">60</option>
									<option value="">65</option>
									<option value="">70</option>
								</select>
							</span>
							<span class="md_select">
								<select name="" id="" class="form--line">
									<option value="">以上</option>
									<option value="">未満</option>
								</select>
							</span>
						</div>
					</div>
					<button class="deleteArea">
						<span class="iconImgPart">
							<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1024 1024" style="enable-background:new 0 0 1024 1024;" xml:space="preserve">
								<path class="st0" d="M939.5,1027.5L512,600L84.5,1027.5l-88-88L424,512L-3.5,84.5l88-88L512,424L939.5-3.5l88,88L600,512  l427.5,427.5L939.5,1027.5z" style="fill:#c2c6ce;"></path>
							</svg>
						</span>
					</button>
				</div>
				<div class="terms">
					<div class="selectSet">
						<div class="flexSelect">
							<span class="md_select">
								<select name="" id="" class="form--line">
									<option value="2" data-select="1" >変革性（偏差値）</option>
									<option value="1" data-select="1" >主体性（偏差値）</option>
									<option value="">選択してください</option>
									<option value="3" data-select="1" >外向性（偏差値）</option>
									<option value="4" data-select="1" >持続性（偏差値）</option>
									<option value="5" data-select="1" >協調性（偏差値）</option>
									<option value="6" data-select="1" >発想性（偏差値）</option>
									<option value="7" data-select="1" >論理性（偏差値）</option>
									<option value="8" data-select="1" >意思伝達力（偏差値）</option>
									<option value="9" data-select="1" >論理的表現力（偏差値）</option>
									<option value="10" data-select="1" >好感表現力（偏差値）</option>
									<option value="11" data-select="1" >対人調和力（偏差値）</option>
									<option value="12" data-select="1" >行動性（偏差値）</option>
									<option value="13" data-select="1" >競争性（偏差値）</option>
									<option value="14" data-select="1" >野心性（偏差値）</option>
									<option value="15" data-select="1" >決断性（偏差値）</option>
									<option value="16" data-select="2" >人付き合いへのストレス耐性（満点100）</option>
									<option value="17" data-select="2" >仕事の負荷量へのストレス耐性（満点100）</option>
									<option value="18" data-select="2" >理想と現実のギャップへのストレス耐性（満点100）</option>
									<option value="19" data-select="2" >評価・評判へのストレス耐性（満点100）</option>
									<option value="20" data-select="2" >経営幹部指向（満点100）</option>
									<option value="21" data-select="2" >アントレプレナー指向（満点100）</option>
									<option value="22" data-select="2" >チャレンジャー指向（満点100）</option>
									<option value="23" data-select="2" >自立指向（満点100）</option>
									<option value="24" data-select="2" >スペシャリスト指向（満点100）</option>
									<option value="25" data-select="2" >安定指向（満点100）</option>
									<option value="26" data-select="2" >私生活重視（満点100）</option>
									<option value="27" data-select="2" >社会奉仕指向（満点100）</option>
									<option value="28" data-select="3" >多くの人と接し、サービスする（最大5）</option>
									<option value="29" data-select="3" >他者と連携・協調していく（最大5）</option>
									<option value="30" data-select="3" >専門性を身につけ、活かす（最大5）</option>
									<option value="31" data-select="3" >正確かつ着実に進める（最大5）</option>
									<option value="32" data-select="3" >新しいアイデアを生み出す（最大5）</option>
									<option value="33" data-select="3" >知識を深め、探究していく（最大5）</option>
									<option value="34" data-select="3" >自分の判断で自律的に進める（最大5）</option>
									<option value="35" data-select="3" >基本に従い定型的に進める（最大5）</option>
									<option value="36" data-select="3" >迅速に判断して進める（最大5）</option>
									<option value="37" data-select="3" >合理的に物事を進める（最大5）</option>
								</select>
							</span>				
							<span class="md_select">
								<select name="" id="" class="form--line">
									<option value=""></option>
									<option value="">30</option>
									<option value="">35</option>
									<option value="">40</option>
									<option value="">45</option>
									<option value="">50</option>
									<option value="">55</option>
									<option value="">60</option>
									<option value="">65</option>
									<option value="">70</option>
								</select>
							</span>
							<span class="md_select">
								<select name="" id="" class="form--line">
									<option value="">以上</option>
									<option value="">未満</option>
								</select>
							</span>
						</div>
					</div>
					<button class="deleteArea">
						<span class="iconImgPart">
							<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1024 1024" style="enable-background:new 0 0 1024 1024;" xml:space="preserve">
								<path class="st0" d="M939.5,1027.5L512,600L84.5,1027.5l-88-88L424,512L-3.5,84.5l88-88L512,424L939.5-3.5l88,88L600,512  l427.5,427.5L939.5,1027.5z" style="fill:#c2c6ce;"></path>
							</svg>
						</span>
					</button>
				</div>
			`;
			break;
			case 'add08':
			targetClass = 'termArea08';
			content = `
				<div class="terms">
					<div class="selectSet">
						<div class="flexSelect">
							<span class="md_select">
								<select name="" id="" class="form--line">
									<option value="1">⾃分のビジネスで収益化（起業含む）</option>
									<option value="0">選択してください</option>
									<option value="2">ひとつのことに熱中した経験</option>
									<option value="3">まわりに流されず⾃分で決断</option>
									<option value="4">1位になった経験</option>
									<option value="5">組織を新規⽴ち上げ</option>
									<option value="6">挫折を乗り越えた経験</option>
									<option value="7">⻑期インターン経験</option>
									<option value="8">情報収集・インプット⼤好き</option>
									<option value="9">学内成績優秀者</option>
									<option value="10">バックパッカー</option>
									<option value="11">海外で2ヵ⽉以上のプロジェクト参加</option>
									<option value="12">アルバイトをめっちゃやってきた</option>
									<option value="13">自他ともに認める遊び人</option>
									<option value="14">ぶっちゃけ苦労人</option>
									<option value="15">いろんなコミュニティに知り合いがいる</option>
									<option value="16">オタク気質・サブカル好き</option>
									<option value="17">10名以上のチームでリーダーシップ発揮</option>
									<option value="18">⾃分でイベント・コンテンツを企画</option>
									<option value="19">なんか海外すごい好き</option>
									<option value="20">あまのじゃく・ちょっと変わり者</option>
									<option value="21">体育会所属</option>
									<option value="22">学⽣団体所属</option>
									<option value="23">ビジコン参加経験</option>
								</select>
							</span>
							<span class="text">のタグを選択している学生を</span>
							<span class="md_select">
								<select name="" id="" class="form--line">
									<option value="">含む</option>
									<option value="">含まない</option>
								</select>
							</span>
						</div>
					</div>
					<button class="deleteArea">
						<span class="iconImgPart">
							<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1024 1024" style="enable-background:new 0 0 1024 1024;" xml:space="preserve">
								<path class="st0" d="M939.5,1027.5L512,600L84.5,1027.5l-88-88L424,512L-3.5,84.5l88-88L512,424L939.5-3.5l88,88L600,512  l427.5,427.5L939.5,1027.5z" style="fill:#c2c6ce;"></path>
							</svg>
						</span>
					</button>
				</div>
				<div class="terms">
					<div class="selectSet">
						<div class="flexSelect">
							<span class="md_select">
								<select name="" id="" class="form--line">
									<option value="2">ひとつのことに熱中した経験</option>
									<option value="1">⾃分のビジネスで収益化（起業含む）</option>
									<option value="0">選択してください</option>
									<option value="3">まわりに流されず⾃分で決断</option>
									<option value="4">1位になった経験</option>
									<option value="5">組織を新規⽴ち上げ</option>
									<option value="6">挫折を乗り越えた経験</option>
									<option value="7">⻑期インターン経験</option>
									<option value="8">情報収集・インプット⼤好き</option>
									<option value="9">学内成績優秀者</option>
									<option value="10">バックパッカー</option>
									<option value="11">海外で2ヵ⽉以上のプロジェクト参加</option>
									<option value="12">アルバイトをめっちゃやってきた</option>
									<option value="13">自他ともに認める遊び人</option>
									<option value="14">ぶっちゃけ苦労人</option>
									<option value="15">いろんなコミュニティに知り合いがいる</option>
									<option value="16">オタク気質・サブカル好き</option>
									<option value="17">10名以上のチームでリーダーシップ発揮</option>
									<option value="18">⾃分でイベント・コンテンツを企画</option>
									<option value="19">なんか海外すごい好き</option>
									<option value="20">あまのじゃく・ちょっと変わり者</option>
									<option value="21">体育会所属</option>
									<option value="22">学⽣団体所属</option>
									<option value="23">ビジコン参加経験</option>
								</select>
							</span>
							<span class="text">のタグを選択している学生を</span>
							<span class="md_select">
								<select name="" id="" class="form--line">
									<option value="">含む</option>
									<option value="">含まない</option>
								</select>
							</span>
						</div>
					</div>
					<button class="deleteArea">
						<span class="iconImgPart">
							<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1024 1024" style="enable-background:new 0 0 1024 1024;" xml:space="preserve">
								<path class="st0" d="M939.5,1027.5L512,600L84.5,1027.5l-88-88L424,512L-3.5,84.5l88-88L512,424L939.5-3.5l88,88L600,512  l427.5,427.5L939.5,1027.5z" style="fill:#c2c6ce;"></path>
							</svg>
						</span>
					</button>
				</div>
			`;
			break;
		default:
			console.error('Unsupported buttonId:', buttonId);
			return;
	}

	// 指定されたクラスのエリアに内容を追加
	$(`.${targetClass}`).append(content);

	// termsの数に基づいてdeleteAreaの表示・非表示を更新
	updateDeleteButtons(targetClass);
	
}

// 削除ボタンの表示・非表示を制御する関数
function updateDeleteButtons(targetClass) {
	// 指定されたクラスのエリア内にある .terms 要素の数を確認
	let termArea = document.querySelector(`.${targetClass}`);
	let termsCount = termArea.querySelectorAll('.terms').length;
	let deleteButtons = termArea.querySelectorAll('.deleteArea');

	// termsが1つしかない場合は削除ボタンを非表示、2つ以上ある場合は表示
	deleteButtons.forEach(button => {
		button.style.display = termsCount === 1 ? "none" : "inline-block";
	});

	// md_toggle--tag の show クラスの付与・削除
	if (termsCount >= 2) {
		$('.md_toggle--tag').addClass('show');
	} else {
		$('.md_toggle--tag').removeClass('show');
	}
}

// ページが読み込まれた時に初期状態でdeleteAreaを非表示にする
$(document).ready(function() {
	// 初期状態で各エリア内のdeleteAreaを非表示にする（termsが1つだけの場合）
	updateDeleteButtons('termArea01');
	updateDeleteButtons('termArea02');
	updateDeleteButtons('termArea03');
	updateDeleteButtons('termArea04');
	updateDeleteButtons('termArea05');
	updateDeleteButtons('termArea06');
	updateDeleteButtons('termArea07');
	updateDeleteButtons('termArea08');

	// ボタンがクリックされたときに要素を追加
	$("button[id^='add']").click(function() {
		addTerm(this.id);
	});

	// 削除ボタンがクリックされたときに親要素 .terms を削除
	$(document).on('click', '.deleteArea', function() {
		let parentClass = $(this).closest('.termArea01, .termArea02, .termArea03, .termArea04, .termArea05, .termArea06, .termArea07, .termArea08').attr('class').split(' ')[0];
		$(this).closest('.terms').remove();
		updateDeleteButtons(parentClass);
	});
});





/*----------------------------------------
 Library 
----------------------------------------*/


/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2008 George McGinley Smith
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
	def: 'easeOutQuart',
	swing: function (x, t, b, c, d) {
		//alert(jQuery.easing.default);
		return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
	},
	easeInQuad: function (x, t, b, c, d) {
		return c*(t/=d)*t + b;
	},
	easeOutQuad: function (x, t, b, c, d) {
		return -c *(t/=d)*(t-2) + b;
	},
	easeInOutQuad: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t + b;
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInQuart: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t + b;
	},
	easeOutQuart: function (x, t, b, c, d) {
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
	easeInOutQuart: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
	easeInQuint: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t*t + b;
	},
	easeOutQuint: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t*t*t + 1) + b;
	},
	easeInOutQuint: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
		return c/2*((t-=2)*t*t*t*t + 2) + b;
	}
});


/* Modernizr 2.6.2 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-fontface-backgroundsize-borderimage-borderradius-boxshadow-flexbox-flexbox_legacy-hsla-multiplebgs-opacity-rgba-textshadow-cssanimations-csscolumns-generatedcontent-cssgradients-cssreflections-csstransforms-csstransforms3d-csstransitions-cssclasses-teststyles-testprop-testallprops-prefixes-domprefixes-cssclassprefix:mod!
 */
;window.Modernizr=function(a,b,c){function A(a){j.cssText=a}function B(a,b){return A(n.join(a+";")+(b||""))}function C(a,b){return typeof a===b}function D(a,b){return!!~(""+a).indexOf(b)}function E(a,b){for(var d in a){var e=a[d];if(!D(e,"-")&&j[e]!==c)return b=="pfx"?e:!0}return!1}function F(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:C(f,"function")?f.bind(d||b):f}return!1}function G(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+p.join(d+" ")+d).split(" ");return C(b,"string")||C(b,"undefined")?E(e,b):(e=(a+" "+q.join(d+" ")+d).split(" "),F(e,b,c))}var d="2.6.2",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k,l=":)",m={}.toString,n=" -webkit- -moz- -o- -ms- ".split(" "),o="Webkit Moz O ms",p=o.split(" "),q=o.toLowerCase().split(" "),r={},s={},t={},u=[],v=u.slice,w,x=function(a,c,d,e){var f,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),l.appendChild(j);return f=["­",'<style id="s',h,'">',a,"</style>"].join(""),l.id=h,(m?l:n).innerHTML+=f,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=g.style.overflow,g.style.overflow="hidden",g.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),g.style.overflow=k),!!i},y={}.hasOwnProperty,z;!C(y,"undefined")&&!C(y.call,"undefined")?z=function(a,b){return y.call(a,b)}:z=function(a,b){return b in a&&C(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=v.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(v.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(v.call(arguments)))};return e}),r.flexbox=function(){return G("flexWrap")},r.rgba=function(){return A("background-color:rgba(150,255,150,.5)"),D(j.backgroundColor,"rgba")},r.hsla=function(){return A("background-color:hsla(120,40%,100%,.5)"),D(j.backgroundColor,"rgba")||D(j.backgroundColor,"hsla")},r.multiplebgs=function(){return A("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(j.background)},r.backgroundsize=function(){return G("backgroundSize")},r.borderimage=function(){return G("borderImage")},r.borderradius=function(){return G("borderRadius")},r.boxshadow=function(){return G("boxShadow")},r.textshadow=function(){return b.createElement("div").style.textShadow===""},r.opacity=function(){return B("opacity:.55"),/^0.55$/.test(j.opacity)},r.cssanimations=function(){return G("animationName")},r.csscolumns=function(){return G("columnCount")},r.cssgradients=function(){var a="background-image:",b="gradient(linear,left top,right bottom,from(#9f9),to(white));",c="linear-gradient(left top,#9f9, white);";return A((a+"-webkit- ".split(" ").join(b+a)+n.join(c+a)).slice(0,-a.length)),D(j.backgroundImage,"gradient")},r.cssreflections=function(){return G("boxReflect")},r.csstransforms=function(){return!!G("transform")},r.csstransforms3d=function(){var a=!!G("perspective");return a&&"webkitPerspective"in g.style&&x("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(b,c){a=b.offsetLeft===9&&b.offsetHeight===3}),a},r.csstransitions=function(){return G("transition")},r.fontface=function(){var a;return x('@font-face {font-family:"font";src:url("https://")}',function(c,d){var e=b.getElementById("smodernizr"),f=e.sheet||e.styleSheet,g=f?f.cssRules&&f.cssRules[0]?f.cssRules[0].cssText:f.cssText||"":"";a=/src/i.test(g)&&g.indexOf(d.split(" ")[0])===0}),a},r.generatedcontent=function(){var a;return x(["#",h,"{font:0/0 a}#",h,':after{content:"',l,'";visibility:hidden;font:3px/1 a}'].join(""),function(b){a=b.offsetHeight>=3}),a};for(var H in r)z(r,H)&&(w=H.toLowerCase(),e[w]=r[H](),u.push((e[w]?"":"no-")+w));return e.addTest=function(a,b){if(typeof a=="object")for(var d in a)z(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" mod-"+(b?"":"no-")+a),e[a]=b}return e},A(""),i=k=null,e._version=d,e._prefixes=n,e._domPrefixes=q,e._cssomPrefixes=p,e.testProp=function(a){return E([a])},e.testAllProps=G,e.testStyles=x,g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" mod-js mod-"+u.join(" mod-"):""),e}(this,this.document); 



/**
 * jQuery.fastClick.js
 *
 * Work around the 300ms delay for the click event in some mobile browsers.
 *
 * Code based on <http://code.google.com/mobile/articles/fast_buttons.html>
 *
 * @usage
 * $('button').fastClick(function() {alert('clicked!');});
 *
 * @license MIT
 * @author Dave Hulbert (dave1010)
 * @version 1.0.0 2013-01-17
 */

/*global document, window, jQuery, Math */

(function($) {

$.fn.fastClick = function(handler) {
	return $(this).each(function(){
		$.FastButton($(this)[0], handler);
	});
};

$.FastButton = function(element, handler) {
	var startX, startY;

	var reset = function() {
		$(element).unbind('touchend');
		$("body").unbind('touchmove.fastClick');
	};

	var onClick = function(event) {
		event.stopPropagation();
		reset();
		handler.call(this, event);

		if (event.type === 'touchend') {
			$.clickbuster.preventGhostClick(startX, startY);
		}
	};

	var onTouchMove = function(event) {
		if (Math.abs(event.originalEvent.touches[0].clientX - startX) > 10 ||
			Math.abs(event.originalEvent.touches[0].clientY - startY) > 10) {
			reset();
		}
	};

	var onTouchStart = function(event) {
		event.stopPropagation();

		$(element).bind('touchend', onClick);
		$("body").bind('touchmove.fastClick', onTouchMove);

		startX = event.originalEvent.touches[0].clientX;
		startY = event.originalEvent.touches[0].clientY;
	};

	$(element).bind({
		touchstart: onTouchStart,
		click: onClick
	});
};

$.clickbuster = {
	coordinates: [],

	preventGhostClick: function(x, y) {
		$.clickbuster.coordinates.push(x, y);
		window.setTimeout($.clickbuster.pop, 2500);
	},

	pop: function() {
		$.clickbuster.coordinates.splice(0, 2);
	},

	onClick: function(event) {
		var x, y, i;
		for (i = 0; i < $.clickbuster.coordinates.length; i += 2) {
			x = $.clickbuster.coordinates[i];
			y = $.clickbuster.coordinates[i + 1];
			if (Math.abs(event.clientX - x) < 25 && Math.abs(event.clientY - y) < 25) {
				event.stopPropagation();
				event.preventDefault();
			}
		}
	}
};

$(function(){
	if (document.addEventListener){
		document.addEventListener('click', $.clickbuster.onClick, true);
	} else if (document.attachEvent){
		// for IE 7/8
		document.attachEvent('onclick', $.clickbuster.onClick);
	}
});

}(jQuery));

/*
 * jQuery autoResize (textarea auto-resizer)
 * @copyright James Padolsey http://james.padolsey.com
 * @version 1.04
 */

(function(a){a.fn.autoResize=function(j){var b=a.extend({onResize:function(){},animate:true,animateDuration:150,animateCallback:function(){},extraSpace:20,limit:1000},j);this.filter('textarea').each(function(){var c=a(this).css({resize:'none','overflow-y':'hidden'}),k=c.height(),f=(function(){var l=['height','width','lineHeight','textDecoration','letterSpacing'],h={};a.each(l,function(d,e){h[e]=c.css(e)});return c.clone().removeAttr('id').removeAttr('name').css({position:'absolute',top:0,left:-9999}).css(h).attr('tabIndex','-1').insertBefore(c)})(),i=null,g=function(){f.height(0).val(a(this).val()).scrollTop(10000);var d=Math.max(f.scrollTop(),k)+b.extraSpace,e=a(this).add(f);if(i===d){return}i=d;if(d>=b.limit){a(this).css('overflow-y','');return}b.onResize.call(this);b.animate&&c.css('display')==='block'?e.stop().animate({height:d},b.animateDuration,b.animateCallback):e.height(d)};c.unbind('.dynSiz').bind('keyup.dynSiz',g).bind('keydown.dynSiz',g).bind('change.dynSiz',g)});return this}})(jQuery);


/*!
  * Stickyfill – `position: sticky` polyfill
  * v. 2.1.0 | https://github.com/wilddeer/stickyfill
  * MIT License
  */
!function(a,b){"use strict";function c(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function d(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])}function e(a){return parseFloat(a)||0}function f(a){for(var b=0;a;)b+=a.offsetTop,a=a.offsetParent;return b}function g(){function c(){a.pageXOffset!=m.left?(m.top=a.pageYOffset,m.left=a.pageXOffset,p.refreshAll()):a.pageYOffset!=m.top&&(m.top=a.pageYOffset,m.left=a.pageXOffset,n.forEach(function(a){return a._recalcPosition()}))}function d(){f=setInterval(function(){n.forEach(function(a){return a._fastCheck()})},500)}function e(){clearInterval(f)}if(!k){k=!0,c(),a.addEventListener("scroll",c),a.addEventListener("resize",p.refreshAll),a.addEventListener("orientationchange",p.refreshAll);var f=void 0,g=void 0,h=void 0;"hidden"in b?(g="hidden",h="visibilitychange"):"webkitHidden"in b&&(g="webkitHidden",h="webkitvisibilitychange"),h?(b[g]||d(),b.addEventListener(h,function(){b[g]?e():d()})):d()}}var h=function(){function a(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),i=!1,j="undefined"!=typeof a;j&&a.getComputedStyle?!function(){var a=b.createElement("div");["","-webkit-","-moz-","-ms-"].some(function(b){try{a.style.position=b+"sticky"}catch(a){}return""!=a.style.position})&&(i=!0)}():i=!0;var k=!1,l="undefined"!=typeof ShadowRoot,m={top:null,left:null},n=[],o=function(){function g(a){if(c(this,g),!(a instanceof HTMLElement))throw new Error("First argument must be HTMLElement");if(n.some(function(b){return b._node===a}))throw new Error("Stickyfill is already applied to this node");this._node=a,this._stickyMode=null,this._active=!1,n.push(this),this.refresh()}return h(g,[{key:"refresh",value:function(){if(!i&&!this._removed){this._active&&this._deactivate();var c=this._node,g=getComputedStyle(c),h={position:g.position,top:g.top,display:g.display,marginTop:g.marginTop,marginBottom:g.marginBottom,marginLeft:g.marginLeft,marginRight:g.marginRight,cssFloat:g.cssFloat};if(!isNaN(parseFloat(h.top))&&"table-cell"!=h.display&&"none"!=h.display){this._active=!0;var j=c.style.position;"sticky"!=g.position&&"-webkit-sticky"!=g.position||(c.style.position="static");var k=c.parentNode,m=l&&k instanceof ShadowRoot?k.host:k,n=c.getBoundingClientRect(),o=m.getBoundingClientRect(),p=getComputedStyle(m);this._parent={node:m,styles:{position:m.style.position},offsetHeight:m.offsetHeight},this._offsetToWindow={left:n.left,right:b.documentElement.clientWidth-n.right},this._offsetToParent={top:n.top-o.top-e(p.borderTopWidth),left:n.left-o.left-e(p.borderLeftWidth),right:-n.right+o.right-e(p.borderRightWidth)},this._styles={position:j,top:c.style.top,bottom:c.style.bottom,left:c.style.left,right:c.style.right,width:c.style.width,marginTop:c.style.marginTop,marginLeft:c.style.marginLeft,marginRight:c.style.marginRight};var q=e(h.top);this._limits={start:n.top+a.pageYOffset-q,end:o.top+a.pageYOffset+m.offsetHeight-e(p.borderBottomWidth)-c.offsetHeight-q-e(h.marginBottom)};var r=p.position;"absolute"!=r&&"relative"!=r&&(m.style.position="relative"),this._recalcPosition();var s=this._clone={};s.node=b.createElement("div"),d(s.node.style,{width:n.right-n.left+"px",height:n.bottom-n.top+"px",marginTop:h.marginTop,marginBottom:h.marginBottom,marginLeft:h.marginLeft,marginRight:h.marginRight,cssFloat:h.cssFloat,padding:0,border:0,borderSpacing:0,fontSize:"1em",position:"static"}),k.insertBefore(s.node,c),s.docOffsetTop=f(s.node)}}}},{key:"_recalcPosition",value:function(){if(this._active&&!this._removed){var a=m.top<=this._limits.start?"start":m.top>=this._limits.end?"end":"middle";if(this._stickyMode!=a){switch(a){case"start":d(this._node.style,{position:"absolute",left:this._offsetToParent.left+"px",right:this._offsetToParent.right+"px",top:this._offsetToParent.top+"px",bottom:"auto",width:"auto",marginLeft:0,marginRight:0,marginTop:0});break;case"middle":d(this._node.style,{position:"fixed",left:this._offsetToWindow.left+"px",right:this._offsetToWindow.right+"px",top:this._styles.top,bottom:"auto",width:"auto",marginLeft:0,marginRight:0,marginTop:0});break;case"end":d(this._node.style,{position:"absolute",left:this._offsetToParent.left+"px",right:this._offsetToParent.right+"px",top:"auto",bottom:0,width:"auto",marginLeft:0,marginRight:0})}this._stickyMode=a}}}},{key:"_fastCheck",value:function(){this._active&&!this._removed&&(Math.abs(f(this._clone.node)-this._clone.docOffsetTop)>1||Math.abs(this._parent.node.offsetHeight-this._parent.offsetHeight)>1)&&this.refresh()}},{key:"_deactivate",value:function(){var a=this;this._active&&!this._removed&&(this._clone.node.parentNode.removeChild(this._clone.node),delete this._clone,d(this._node.style,this._styles),delete this._styles,n.some(function(b){return b!==a&&b._parent&&b._parent.node===a._parent.node})||d(this._parent.node.style,this._parent.styles),delete this._parent,this._stickyMode=null,this._active=!1,delete this._offsetToWindow,delete this._offsetToParent,delete this._limits)}},{key:"remove",value:function(){var a=this;this._deactivate(),n.some(function(b,c){if(b._node===a._node)return n.splice(c,1),!0}),this._removed=!0}}]),g}(),p={stickies:n,Sticky:o,forceSticky:function(){i=!1,g(),this.refreshAll()},addOne:function(a){if(!(a instanceof HTMLElement)){if(!a.length||!a[0])return;a=a[0]}for(var b=0;b<n.length;b++)if(n[b]._node===a)return n[b];return new o(a)},add:function(a){if(a instanceof HTMLElement&&(a=[a]),a.length){for(var b=[],c=function(c){var d=a[c];return d instanceof HTMLElement?n.some(function(a){if(a._node===d)return b.push(a),!0})?"continue":void b.push(new o(d)):(b.push(void 0),"continue")},d=0;d<a.length;d++){c(d)}return b}},refreshAll:function(){n.forEach(function(a){return a.refresh()})},removeOne:function(a){if(!(a instanceof HTMLElement)){if(!a.length||!a[0])return;a=a[0]}n.some(function(b){if(b._node===a)return b.remove(),!0})},remove:function(a){if(a instanceof HTMLElement&&(a=[a]),a.length)for(var b=function(b){var c=a[b];n.some(function(a){if(a._node===c)return a.remove(),!0})},c=0;c<a.length;c++)b(c)},removeAll:function(){for(;n.length;)n[0].remove()}};i||g(),"undefined"!=typeof module&&module.exports?module.exports=p:j&&(a.Stickyfill=p)}(window,document);