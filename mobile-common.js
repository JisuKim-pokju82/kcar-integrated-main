/* ==========================================================================
   K Car Integrated Main (Gate) — Real Mobile Standalone Renderer (A ~ F)
   ========================================================================== */
(function () {
  function renderKcarLogo(whiteMode) {
    var mainRed = whiteMode ? '#FFFFFF' : '#B70F28';
    var subGray = whiteMode ? 'rgba(255,255,255,0.72)' : '#B0B2BD';
    var sloganColor = whiteMode ? 'rgba(255,255,255,0.90)' : '#16171D';
    return (
      '<div style="display:inline-flex;align-items:center;gap:7px;">' +
        '<svg width="76" height="20" viewBox="0 0 120 31" fill="none" aria-label="K Car">' +
          '<path fill="' + mainRed + '" d="M51.694 14.822 61.851 3.087h-6.636L46.873 13.09V3.087h-5.646v24.847h5.647V17.052l6.445 8.378a6.4 6.4 0 0 0 5.065 2.504h3.852l-10.548-13.12zM107.073 24.086v-7.272c0-5.24-2.356-7.682-7.414-7.682-2.058 0-4.062.573-5.951 1.712l-.21.13.027.382c.04.655.392 1.248.94 1.603a1.97 1.97 0 0 0 1.802.178 7.9 7.9 0 0 1 2.884-.574c2.675 0 3.799 1.058 3.9 3.753-1.063-.048-1.902-.048-3.013-.048-3.162 0-8.51 1.303-8.51 6.194 0 3.739 2.477 5.888 6.797 5.888 2.675 0 4.34-1.269 5.221-2.217a2.67 2.67 0 0 0 2.518 1.808h1.212l-.061-.457c-.088-.676-.135-1.788-.135-3.391m-4.029-4.544v1.153c0 2.6-1.706 4.216-4.455 4.216-1.15 0-2.85-.777-2.85-2.456 0-2.585 3.54-2.974 5.653-2.974.339 0 .671.02 1.009.034.217.014.427.02.643.027M119.604 9.364c-.65-.13-1.164-.232-2.132-.232-1.659 0-3.352.982-4.401 2.483a3.11 3.11 0 0 0-2.919-2.067h-.711v18.393h4.022v-8.405c0-4.107 1.707-6.768 4.354-6.768.63 0 1.178.096 1.625.28l.555.232V9.446zM89.828 22.367l-.339.164s-.514.245-.697.327c-1.327.594-3.345 1.044-4.692 1.044-4.632 0-7.997-3.527-7.997-8.391s3.359-8.392 8.159-8.392c.711 0 1.415.082 2.085.246a2.98 2.98 0 0 0 2.458-.484 3 3 0 0 0 1.233-2.204l.06-.73-.487-.218c-1.625-.717-3.426-1.071-5.518-1.071-7.658 0-13.007 5.24-13.007 12.737s5.092 12.941 12.973 12.941c2.282 0 4.15-.3 5.566-.893l.487-.205-.298-4.885zM29.336.004C22.173.59 16.458 6.342 15.883 13.559c-.055.662.494 1.215 1.15 1.215H29.39a1.15 1.15 0 0 0 1.151-1.16V1.164c0-.662-.548-1.215-1.205-1.16"/>' +
          '<path fill="' + subGray + '" d="M15.883 17.441c.582 7.218 6.29 12.976 13.453 13.556.657.055 1.206-.498 1.206-1.16v-12.45a1.15 1.15 0 0 0-1.152-1.16H17.035c-.657 0-1.206.553-1.151 1.214"/>' +
          '<path fill="' + mainRed + '" d="M13.284.229H1.158C.518.229 0 .751 0 1.396v12.218c0 .644.518 1.167 1.158 1.167h12.126c.64 0 1.158-.523 1.158-1.167V1.396c0-.645-.518-1.167-1.158-1.167"/>' +
          '<path fill="' + subGray + '" d="M13.284 16.234H1.158C.518 16.234 0 16.756 0 17.4V29.62c0 .644.518 1.167 1.158 1.167h12.126c.64 0 1.158-.523 1.158-1.167V17.401c0-.645-.518-1.167-1.158-1.167"/>' +
        '</svg>' +
        '<span style="font-size:11px;font-weight:700;color:' + sloganColor + ';letter-spacing:-0.4px;">대한민국 No.1 모빌리티플랫폼</span>' +
      '</div>'
    );
  }

  var CONFIGS = {
    a: {
      code: 'A',
      name: 'A안 · 시그니처 퓨어 화이트',
      skinCls: 'mskin-a',
      crimsonCap: false,
      searchCls: '',
      placeholder: '원하는 모델을 검색해 보세요',
      searchBtnHtml: '<button type="button" class="kcar-search-submit" aria-label="검색"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#B70F28" stroke-width="2.3"><circle cx="11" cy="11" r="7"/><line x1="16.2" y1="16.2" x2="21" y2="21" stroke-linecap="round"/></svg></button>',
      wrapUsedStyle: '',
      cardRadius: '16px',
      buyStyle: 'background:#B70F28;color:#FFFFFF;box-shadow:0 8px 18px rgba(183,15,40,0.18);',
      buyTag: '',
      buySubColor: 'rgba(255,255,255,0.86)',
      buyCarImg: '<img src="./assets/clay_car_on_red.png" alt="내차 사기" style="width:106px;height:78px;object-fit:contain;" />',
      sellStyle: 'background:#F4F6FA;color:#16171D;box-shadow:inset 0 0 0 1px #E6EAF2;',
      sellTag: '',
      sellSubColor: '#686B73',
      c2cStyle: 'background:#F4F6FA;color:#16171D;box-shadow:inset 0 0 0 1px #E6EAF2;',
      c2cBadge: '<span style="font-size:10px;font-weight:700;color:#B70F28;background:#FDEEEF;padding:2px 7px;border-radius:99px;">진단·보증</span>',
      c2cSubColor: '#686B73',
      c2cIconWrap: '<img class="blend-multiply" src="./assets/icon3d_c2c_pin.png" alt="안심직거래" style="width:50px;height:50px;object-fit:contain;flex-shrink:0;" />',
      rentStyle: [
        'background:#F4F6FA;box-shadow:inset 0 0 0 1px #EAEFF5;',
        'background:#F4F6FA;box-shadow:inset 0 0 0 1px #EAEFF5;',
        'background:#F4F6FA;box-shadow:inset 0 0 0 1px #EAEFF5;'
      ],
      bikeStyle: 'background:#FFF5F6;box-shadow:inset 0 0 0 1px #F8D0D6;',
      mycarStyle: 'background:#F4F6FA;box-shadow:inset 0 0 0 1px #EAEFF5;'
    },
    b: {
      code: 'B',
      name: 'B안 · 크림슨-실버 에어로 브릿지',
      skinCls: 'mskin-b',
      crimsonCap: false,
      searchCls: 'style-aero-capsule',
      placeholder: '모델명, 차량번호를 빠르게 검색',
      searchBtnHtml: '<button type="button" class="kcar-search-submit" style="background:linear-gradient(135deg,#D91432 0%,#B70F28 100%);color:#FFFFFF;box-shadow:0 4px 10px rgba(183,15,40,0.28);" aria-label="검색"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2.5"><circle cx="11" cy="11" r="7"/><line x1="16.2" y1="16.2" x2="21" y2="21" stroke-linecap="round"/></svg></button>',
      wrapUsedStyle: 'background:#FFFFFF;border-radius:22px;padding:13px 13px;margin:0 -6px;box-shadow:0 14px 32px rgba(22,23,29,0.09),0 2px 6px rgba(183,15,40,0.06);',
      cardRadius: '15px',
      buyStyle: 'background:#16171D;color:#FFFFFF;box-shadow:0 8px 18px rgba(22,23,29,0.20);',
      buyTag: '',
      buySubColor: 'rgba(255,255,255,0.74)',
      buyCarImg: '<img src="./assets/clay_car_on_dark.png" alt="내차 사기" style="width:106px;height:78px;object-fit:contain;" />',
      sellStyle: 'background:linear-gradient(155deg,#FFF7E8 0%,#FFFDF9 100%);color:#16171D;box-shadow:inset 0 0 0 1px #F3DEC0;',
      sellTag: '',
      sellSubColor: '#7C5D26',
      c2cStyle: 'background:linear-gradient(90deg,#FFF1F3 0%,#FFF7F8 100%);color:#16171D;box-shadow:inset 0 0 0 1px #F6C8D0;',
      c2cBadge: '<span style="font-size:10px;font-weight:700;color:#FFFFFF;background:#B70F28;padding:2px 7px;border-radius:99px;">C2C 안심</span>',
      c2cSubColor: '#8F2436',
      c2cIconWrap: '<img class="blend-multiply" src="./assets/icon3d_c2c_pin.png" alt="안심직거래" style="width:50px;height:50px;object-fit:contain;flex-shrink:0;" />',
      rentStyle: [
        'background:#FFFFFF;box-shadow:0 6px 16px rgba(15,23,42,0.05);',
        'background:#FFFFFF;box-shadow:0 6px 16px rgba(15,23,42,0.05);',
        'background:#FFFFFF;box-shadow:0 6px 16px rgba(15,23,42,0.05);'
      ],
      bikeStyle: 'background:linear-gradient(145deg,#FFFFFF 0%,#FFF0F3 100%);box-shadow:0 6px 16px rgba(183,15,40,0.07),inset 0 0 0 1px #F8CDD4;',
      mycarStyle: 'background:#FFFFFF;box-shadow:0 6px 16px rgba(15,23,42,0.05);'
    },
    c: {
      code: 'C',
      name: 'C안 · 윈드터널 실버펄 & 에어로 글래스',
      skinCls: 'mskin-c',
      crimsonCap: false,
      searchCls: 'style-glass-frost',
      placeholder: '원하는 모빌리티를 검색해 보세요',
      searchBtnHtml: '<button type="button" class="kcar-search-submit" style="background:rgba(183,15,40,0.10);" aria-label="검색"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#B70F28" stroke-width="2.3"><circle cx="11" cy="11" r="7"/><line x1="16.2" y1="16.2" x2="21" y2="21" stroke-linecap="round"/></svg></button>',
      wrapUsedStyle: '',
      cardRadius: '18px',
      buyStyle: 'background:linear-gradient(145deg,rgba(255,230,236,0.82) 0%,rgba(255,255,255,0.62) 100%);color:#16171D;border:1.5px solid #FFFFFF;box-shadow:inset 0 1px 0 #FFFFFF,0 10px 24px rgba(183,15,40,0.09);',
      buyTag: '<span class="m-tech-tag" style="color:#B70F28;">● DIRECT BUY</span>',
      buySubColor: '#7A2838',
      buyCarImg: '<img class="blend-multiply" src="./assets/clay_car_iso.png" alt="내차 사기" style="width:102px;height:74px;object-fit:contain;" />',
      sellStyle: 'background:linear-gradient(145deg,rgba(228,241,255,0.82) 0%,rgba(255,255,255,0.62) 100%);color:#16171D;border:1.5px solid #FFFFFF;box-shadow:inset 0 1px 0 #FFFFFF,0 10px 24px rgba(24,58,110,0.08);',
      sellTag: '<span class="m-tech-tag" style="color:#0066CC;">● FAST SELL</span>',
      sellSubColor: '#365880',
      c2cStyle: 'background:linear-gradient(135deg,rgba(255,255,255,0.84) 0%,rgba(246,250,255,0.60) 100%);color:#16171D;border:1.5px solid #FFFFFF;box-shadow:inset 0 1px 0 #FFFFFF,0 10px 22px rgba(24,48,88,0.07);',
      c2cBadge: '<span style="font-size:9.5px;font-weight:700;color:#086F4F;background:rgba(221,242,229,0.92);padding:2px 7px;border-radius:99px;">SAFE C2C</span>',
      c2cSubColor: '#54555A',
      c2cIconWrap: '<img class="blend-multiply" src="./assets/icon3d_c2c_pin.png" alt="안심직거래" style="width:50px;height:50px;object-fit:contain;flex-shrink:0;" />',
      rentStyle: [
        'background:linear-gradient(145deg,rgba(255,255,255,0.84) 0%,rgba(246,250,255,0.60) 100%);border:1.5px solid #FFFFFF;box-shadow:inset 0 1px 0 #FFFFFF,0 8px 20px rgba(24,48,88,0.06);',
        'background:linear-gradient(145deg,rgba(255,255,255,0.84) 0%,rgba(246,250,255,0.60) 100%);border:1.5px solid #FFFFFF;box-shadow:inset 0 1px 0 #FFFFFF,0 8px 20px rgba(24,48,88,0.06);',
        'background:linear-gradient(145deg,rgba(255,255,255,0.84) 0%,rgba(246,250,255,0.60) 100%);border:1.5px solid #FFFFFF;box-shadow:inset 0 1px 0 #FFFFFF,0 8px 20px rgba(24,48,88,0.06);'
      ],
      bikeStyle: 'background:linear-gradient(145deg,rgba(255,234,239,0.84) 0%,rgba(255,255,255,0.62) 100%);border:1.5px solid #FFFFFF;box-shadow:inset 0 1px 0 #FFFFFF,0 8px 20px rgba(183,15,40,0.07);',
      mycarStyle: 'background:linear-gradient(145deg,rgba(255,255,255,0.84) 0%,rgba(246,250,255,0.60) 100%);border:1.5px solid #FFFFFF;box-shadow:inset 0 1px 0 #FFFFFF,0 8px 20px rgba(24,48,88,0.06);'
    },
    d: {
      code: 'D',
      name: 'D안 · 플래티넘 슈퍼앱 & 오닉스 액션바',
      skinCls: 'mskin-d',
      crimsonCap: false,
      searchCls: 'style-neo-bold',
      placeholder: '차량명 · 번호판으로 원탭 검색',
      searchBtnHtml: '<button type="button" class="kcar-search-submit" style="border-radius:9px;background:#16171D;color:#FFFFFF;" aria-label="검색"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2.5"><circle cx="11" cy="11" r="7"/><line x1="16.2" y1="16.2" x2="21" y2="21" stroke-linecap="round"/></svg></button>',
      wrapUsedStyle: 'background:#FFFFFF;border-radius:20px;padding:13px 13px;margin:0 -6px;box-shadow:0 8px 20px rgba(15,23,42,0.05);',
      cardRadius: '14px',
      buyStyle: 'background:#F3F6FC;color:#16171D;',
      buyTag: '<span style="position:absolute;top:11px;right:11px;width:21px;height:21px;border-radius:50%;background:#FFFFFF;display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:700;color:#B70F28;box-shadow:0 2px 5px rgba(0,0,0,0.06);">↗</span>',
      buySubColor: '#54555A',
      buyCarImg: '<img class="blend-multiply" src="./assets/clay_car_iso.png" alt="내차 사기" style="width:102px;height:74px;object-fit:contain;" />',
      sellStyle: 'background:#F3F6FC;color:#16171D;',
      sellTag: '<span style="position:absolute;top:11px;right:11px;width:21px;height:21px;border-radius:50%;background:#FFFFFF;display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:700;color:#16171D;box-shadow:0 2px 5px rgba(0,0,0,0.06);">↗</span>',
      sellSubColor: '#54555A',
      c2cStyle: 'background:#16171D;color:#FFFFFF;box-shadow:0 6px 16px rgba(22,23,29,0.18);',
      c2cBadge: '<span style="font-size:9.5px;font-weight:700;color:#FFFFFF;background:#E01A38;padding:2px 7px;border-radius:6px;">보증 직거래</span>',
      c2cSubColor: 'rgba(255,255,255,0.72)',
      c2cIconWrap: '<span style="width:44px;height:44px;border-radius:12px;background:#FFFFFF;display:flex;align-items:center;justify-content:center;flex-shrink:0;"><img class="blend-multiply" src="./assets/icon3d_c2c_pin.png" alt="안심직거래" style="width:40px;height:40px;object-fit:contain;" /></span>',
      rentStyle: [
        'background:#FFFFFF;box-shadow:0 4px 12px rgba(15,23,42,0.04);',
        'background:#FFFFFF;box-shadow:0 4px 12px rgba(15,23,42,0.04);',
        'background:#FFFFFF;box-shadow:0 4px 12px rgba(15,23,42,0.04);'
      ],
      bikeStyle: 'background:#FFFFFF;box-shadow:0 4px 12px rgba(15,23,42,0.04),inset 0 0 0 1.5px #F5C2CA;',
      mycarStyle: 'background:#FFFFFF;box-shadow:0 4px 12px rgba(15,23,42,0.04);'
    },
    e: {
      code: 'E',
      name: 'E안 · 티타늄 스튜디오 & 레이싱 스트라이프',
      skinCls: 'mskin-e',
      crimsonCap: false,
      searchCls: 'style-tech-sharp',
      placeholder: '모델명 또는 차량번호 입력',
      searchBtnHtml: '<button type="button" class="kcar-search-submit" aria-label="검색"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#16171D" stroke-width="2.3"><circle cx="11" cy="11" r="7"/><line x1="16.2" y1="16.2" x2="21" y2="21" stroke-linecap="round"/></svg></button>',
      wrapUsedStyle: '',
      cardRadius: '7px',
      buyStyle: 'background:rgba(255,255,255,0.95);color:#16171D;border-radius:7px;border:1px solid #CFD6E3;border-left:4px solid #B70F28;box-shadow:0 6px 16px rgba(15,23,42,0.05);',
      buyTag: '<span class="m-tech-tag" style="color:#B70F28;font-family:monospace;">01 / BUY</span>',
      buySubColor: '#54555A',
      buyCarImg: '<img class="blend-multiply" src="./assets/clay_car_iso.png" alt="내차 사기" style="width:100px;height:72px;object-fit:contain;" />',
      sellStyle: 'background:rgba(255,255,255,0.95);color:#16171D;border-radius:7px;border:1px solid #CFD6E3;border-left:4px solid #16171D;box-shadow:0 6px 16px rgba(15,23,42,0.05);',
      sellTag: '<span class="m-tech-tag" style="color:#16171D;font-family:monospace;">02 / SELL</span>',
      sellSubColor: '#54555A',
      c2cStyle: 'background:rgba(255,255,255,0.95);color:#16171D;border-radius:7px;border:1px solid #CFD6E3;border-left:4px solid #0066FF;box-shadow:0 6px 16px rgba(15,23,42,0.05);',
      c2cBadge: '<span style="font-size:9.5px;font-weight:700;color:#0066FF;font-family:monospace;background:#EAF2FF;padding:1px 6px;border-radius:3px;">03 / C2C</span>',
      c2cSubColor: '#54555A',
      c2cIconWrap: '<img class="blend-multiply" src="./assets/icon3d_c2c_pin.png" alt="안심직거래" style="width:50px;height:50px;object-fit:contain;flex-shrink:0;" />',
      rentStyle: [
        'background:rgba(255,255,255,0.94);border-radius:7px;border:1px solid #D4DAE6;border-top:2.5px solid #16171D;',
        'background:rgba(255,255,255,0.94);border-radius:7px;border:1px solid #D4DAE6;border-top:2.5px solid #16171D;',
        'background:rgba(255,255,255,0.94);border-radius:7px;border:1px solid #D4DAE6;border-top:2.5px solid #B70F28;'
      ],
      bikeStyle: 'background:rgba(255,255,255,0.95);border-radius:7px;border:1px solid #EBC2C9;border-left:4px solid #B70F28;',
      mycarStyle: 'background:rgba(255,255,255,0.95);border-radius:7px;border:1px solid #D4DAE6;border-left:4px solid #585C74;'
    },
    f: {
      code: 'F',
      name: 'F안 · 크림슨 캡 & 화이트 라운지 시트',
      skinCls: 'mskin-f',
      crimsonCap: true,
      searchCls: 'style-cap-float',
      placeholder: '원하는 모델, 차량번호를 검색해 보세요',
      searchBtnHtml: '<button type="button" class="kcar-search-submit" style="background:#FDEEEF;color:#B70F28;" aria-label="검색"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#B70F28" stroke-width="2.4"><circle cx="11" cy="11" r="7"/><line x1="16.2" y1="16.2" x2="21" y2="21" stroke-linecap="round"/></svg></button>',
      wrapUsedStyle: '',
      cardRadius: '17px',
      buyStyle: 'background:linear-gradient(155deg,#FFF4F5 0%,#FFE9EC 100%);color:#16171D;box-shadow:inset 0 0 0 1.2px #F6C5CD;',
      buyTag: '<span class="m-tech-tag" style="color:#B70F28;">직영 본업</span>',
      buySubColor: '#8B2637',
      buyCarImg: '<img class="blend-multiply" src="./assets/clay_car_iso.png" alt="내차 사기" style="width:104px;height:76px;object-fit:contain;" />',
      sellStyle: 'background:linear-gradient(155deg,#F2F6FF 0%,#E8F0FE 100%);color:#16171D;box-shadow:inset 0 0 0 1.2px #C9DBFA;',
      sellTag: '<span class="m-tech-tag" style="color:#0A60EA;">당일 판매</span>',
      sellSubColor: '#2B4C82',
      c2cStyle: 'background:#F7F9FC;color:#16171D;box-shadow:inset 0 0 0 1.2px #E1E6F0;',
      c2cBadge: '<span style="font-size:10px;font-weight:700;color:#0B845F;background:#DDF2E5;padding:2px 7px;border-radius:99px;">수수료 0</span>',
      c2cSubColor: '#54555A',
      c2cIconWrap: '<img class="blend-multiply" src="./assets/icon3d_c2c_pin.png" alt="안심직거래" style="width:50px;height:50px;object-fit:contain;flex-shrink:0;" />',
      rentStyle: [
        'background:#F7F9FC;box-shadow:inset 0 0 0 1px #E6EBF3;',
        'background:#F7F9FC;box-shadow:inset 0 0 0 1px #E6EBF3;',
        'background:#F7F9FC;box-shadow:inset 0 0 0 1px #E6EBF3;'
      ],
      bikeStyle: 'background:linear-gradient(145deg,#FFF5F6 0%,#FFECEF 100%);box-shadow:inset 0 0 0 1px #F6C9D0;',
      mycarStyle: 'background:#F7F9FC;box-shadow:inset 0 0 0 1px #E6EBF3;'
    }
  };

  window.mountKcarMobilePage = function (vKey) {
    var cfg = CONFIGS[vKey] || CONFIGS.a;
    var root = document.getElementById('app');
    if (!root) return;
    root.className = 'mo-app-root ' + cfg.skinCls;

    var usedInner =
      '<div class="m-sec-head">' +
        '<span class="m-sec-title">중고차</span>' +
        '<a href="#none" class="m-sec-more" onclick="return false;">바로가기 ›</a>' +
      '</div>' +
      '<div class="m-used-pair">' +
        '<div class="touch-card m-used-equal" style="border-radius:' + cfg.cardRadius + ';' + cfg.buyStyle + '">' +
          cfg.buyTag +
          '<div>' +
            '<div style="font-size:16.5px;line-height:22px;font-weight:700;">내차 사기</div>' +
            '<div style="font-size:12px;line-height:16px;margin-top:2px;color:' + cfg.buySubColor + ';">직영인증 실매물</div>' +
          '</div>' +
          '<div style="position:absolute;right:5px;bottom:3px;">' + cfg.buyCarImg + '</div>' +
        '</div>' +
        '<div class="touch-card m-used-equal" style="border-radius:' + cfg.cardRadius + ';' + cfg.sellStyle + '">' +
          cfg.sellTag +
          '<div>' +
            '<div style="font-size:16.5px;line-height:22px;font-weight:700;">내차 팔기</div>' +
            '<div style="font-size:12px;line-height:16px;margin-top:2px;color:' + cfg.sellSubColor + ';">방문견적 최고가</div>' +
          '</div>' +
          '<img class="blend-multiply" src="./assets/icon3d_sell_coin.png" alt="내차 팔기" style="position:absolute;right:7px;bottom:5px;width:66px;height:66px;object-fit:contain;" />' +
        '</div>' +
      '</div>' +
      '<div class="touch-card m-used-c2c-bar" style="border-radius:' + cfg.cardRadius + ';' + cfg.c2cStyle + '">' +
        '<div style="display:flex;flex-direction:column;gap:2px;">' +
          '<div style="display:flex;align-items:center;gap:6px;">' +
            '<span style="font-size:15.5px;line-height:20px;font-weight:700;">안심직거래</span>' +
            cfg.c2cBadge +
          '</div>' +
          '<div style="font-size:12px;line-height:16px;color:' + cfg.c2cSubColor + ';">케이카 진단·보증으로 안전한 개인 직거래</div>' +
        '</div>' +
        cfg.c2cIconWrap +
      '</div>';

    var usedBlock = cfg.wrapUsedStyle
      ? '<section style="' + cfg.wrapUsedStyle + '">' + usedInner + '</section>'
      : '<section>' + usedInner + '</section>';

    var rentAndBottomAndBanner =
      '<section>' +
        '<div class="m-sec-head"><span class="m-sec-title">렌터카</span></div>' +
        '<div class="m-rent-grid">' +
          '<div class="touch-card m-rent-card" style="' + cfg.rentStyle[0] + '">' +
            '<div style="font-size:14px;font-weight:700;">중고차 렌트</div>' +
            '<img class="blend-multiply" src="./assets/icon3d_rent_calendar.png" alt="중고차 렌트" style="position:absolute;right:5px;bottom:4px;width:50px;height:50px;object-fit:contain;" />' +
          '</div>' +
          '<div class="touch-card m-rent-card" style="' + cfg.rentStyle[1] + '">' +
            '<div style="font-size:14px;font-weight:700;">신차 렌트</div>' +
            '<img class="blend-multiply" src="./assets/clay_rent_new.png" alt="신차 렌트" style="position:absolute;right:4px;bottom:3px;width:56px;height:52px;object-fit:contain;" />' +
          '</div>' +
          '<div class="touch-card m-rent-card" style="' + cfg.rentStyle[2] + '">' +
            '<div style="font-size:14px;font-weight:700;">렌트 특가</div>' +
            '<img class="blend-multiply" src="./assets/icon3d_rent_deal.png" alt="렌트 특가" style="position:absolute;right:5px;bottom:4px;width:50px;height:50px;object-fit:contain;" />' +
          '</div>' +
        '</div>' +
      '</section>' +
      '<section class="m-bottom-split">' +
        '<div>' +
          '<div class="m-sec-head"><span class="m-sec-title">바이크 <span class="n-badge">N</span></span></div>' +
          '<div class="touch-card m-half-card" style="' + cfg.bikeStyle + '">' +
            '<div style="font-size:14.5px;font-weight:700;">쉽고 편한 직거래</div>' +
            '<img class="blend-multiply" src="./assets/clay_bike_iso.png" alt="바이크 직거래" style="position:absolute;right:5px;bottom:3px;width:66px;height:58px;object-fit:contain;" />' +
          '</div>' +
        '</div>' +
        '<div>' +
          '<div class="m-sec-head"><span class="m-sec-title">마이카</span></div>' +
          '<div class="touch-card m-half-card" style="' + cfg.mycarStyle + '">' +
            '<div style="font-size:14.5px;font-weight:700;">내차 시세 확인</div>' +
            '<img class="blend-multiply" src="./assets/clay_mycar.png" alt="내차 시세 확인" style="position:absolute;right:5px;bottom:3px;width:64px;height:56px;object-fit:contain;" />' +
          '</div>' +
        '</div>' +
      '</section>' +
      '<section class="m-promo-banner">' +
        '<div>' +
          '<div style="font-size:11px;color:rgba(255,255,255,0.75);">K Car의 새로운 도전을 위한 투표이벤트</div>' +
          '<div style="font-size:17.5px;line-height:23px;font-weight:700;margin-top:3px;">케이카에서 <span style="color:#F5A345;">이것까지</span> <span style="color:#FF4D5A;">사볼까?</span></div>' +
        '</div>' +
        '<div style="display:flex;align-items:center;justify-content:space-between;">' +
          '<span style="font-size:11px;color:rgba(255,255,255,0.72);">추첨을 통해 할리스 커피쿠폰 증정</span>' +
          '<span style="font-size:10.5px;background:rgba(0,0,0,0.48);padding:2px 8px;border-radius:99px;">1 / 5</span>' +
        '</div>' +
      '</section>';

    var searchBoxHtml =
      '<form class="kcar-search-box ' + cfg.searchCls + '" onsubmit="return false;">' +
        '<input type="search" placeholder="' + cfg.placeholder + '" aria-label="통합검색" />' +
        cfg.searchBtnHtml +
      '</form>';

    var topAndBodyHtml = '';
    if (cfg.crimsonCap) {
      topAndBodyHtml =
        '<div class="f-crimson-cap">' +
          '<div style="height:44px;display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;">' +
            renderKcarLogo(true) +
            '<button type="button" class="mo-icon-btn" aria-label="알림"><svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="1.9"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg></button>' +
          '</div>' +
          searchBoxHtml +
        '</div>' +
        '<main class="f-white-sheet">' +
          usedBlock +
          rentAndBottomAndBanner +
        '</main>';
    } else {
      topAndBodyHtml =
        '<header class="mo-header">' +
          renderKcarLogo(false) +
          '<div class="mo-header-actions">' +
            '<button type="button" class="mo-icon-btn" aria-label="알림"><svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="#16171D" stroke-width="1.9"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg></button>' +
          '</div>' +
        '</header>' +
        '<main class="mo-main-body">' +
          searchBoxHtml +
          usedBlock +
          rentAndBottomAndBanner +
        '</main>';
    }

    var footerHtml =
      '<footer class="kcar-mo-footer">' +
        '<div class="kf-links">' +
          '<span>회사소개</span>' +
          '<span>이용약관</span>' +
          '<strong>개인정보처리방침</strong>' +
          '<span>소비자보호</span>' +
          '<span>고객지원</span>' +
        '</div>' +
        '<div class="kf-cs-row">' +
          '<span style="font-size:11.5px;font-weight:700;color:#3E4149;">K Car 고객센터</span>' +
          '<span class="kf-cs-tel">1588-5455 <span style="font-size:10.5px;font-weight:400;color:#7A7F8A;">(평일 09:00~18:00)</span></span>' +
        '</div>' +
        '<div class="kf-biz-info">' +
          '<div>상호명 : 케이카 주식회사 &nbsp;|&nbsp; 대표자 : 정인국</div>' +
          '<div>사업자등록번호 : 787-87-00729 <span class="kf-biz-badge">사업자정보확인</span></div>' +
          '<div>통신판매업신고번호 : 제 2018-서울영등포-0562호</div>' +
          '<div>주소 : 서울특별시 영등포구 선유로43길 27, 3층 (양평동3가, 청우오토프라자)</div>' +
        '</div>' +
        '<div class="kf-copy">Copyright © K Car Co., Ltd. All Rights Reserved.</div>' +
      '</footer>';

    var showDock = window.location.search.indexOf('clean=1') === -1;
    var dockHtml = '';
    if (showDock) {
      var keys = ['a', 'b', 'c', 'd', 'e', 'f'];
      var links = keys.map(function (k) {
        var cls = k === vKey ? 'mo-dock-link active' : 'mo-dock-link';
        return '<a class="' + cls + '" href="./' + k + '.html">' + k.toUpperCase() + '</a>';
      }).join('');
      dockHtml =
        '<nav id="quickDock" class="mo-QuickDock" aria-label="모바일 시안 빠른 전환">' +
          links +
          '<a class="mo-dock-hub" href="./mobile.html">목록</a>' +
          '<button type="button" class="mo-dock-toggle" onclick="toggleDock()" title="전환바 접기">✕</button>' +
        '</nav>';
    }

    root.innerHTML = '<div>' + topAndBodyHtml + '</div>' + footerHtml + dockHtml;
  };

  window.toggleDock = function () {
    var dock = document.getElementById('quickDock');
    if (!dock) return;
    if (dock.classList.contains('is-collapsed')) {
      window.location.reload();
    } else {
      dock.classList.add('is-collapsed');
      dock.innerHTML = '<button type="button" style="border:none;background:transparent;color:#FFFFFF;font-size:11.5px;font-weight:700;cursor:pointer;" onclick="window.location.reload()">시안 전환 열기 ▴</button>';
    }
  };
})();
