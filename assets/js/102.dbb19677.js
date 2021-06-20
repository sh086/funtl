(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{507:function(n,s,a){"use strict";a.r(s);var e=a(25),t=Object(e.a)({},(function(){var n=this,s=n.$createElement,a=n._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v('package com.cmhb.module.api.util;\n\nimport com.fasterxml.jackson.core.JsonGenerator;\nimport com.fasterxml.jackson.databind.JsonSerializer;\nimport com.fasterxml.jackson.databind.SerializerProvider;\n\nimport java.io.IOException;\nimport java.time.LocalDateTime;\nimport java.time.ZoneOffset;\n\n/**\n * 序列化LocalDataTime为Long类型秒值\n * @author suhe\n * @since 2018年8月2日10:30:29\n * */\n\npublic class DateSerializer extends JsonSerializer<LocalDateTime> {\n        @Override\n        public void serialize(LocalDateTime date, JsonGenerator gen, SerializerProvider provider) throws IOException {\n            Long dateString = date.toInstant(ZoneOffset.of("+8")).toEpochMilli();\n            gen.writeString(dateString.toString());\n        }\n }\n \n package com.cmhb.module.api.util;\n\nimport com.fasterxml.jackson.core.JsonParser;\nimport com.fasterxml.jackson.databind.DeserializationContext;\nimport com.fasterxml.jackson.databind.JsonDeserializer;\nimport java.io.IOException;\nimport java.time.Instant;\nimport java.time.LocalDateTime;\nimport java.time.ZoneId;\n\n/**\n * Long类型反序列化为LocalDateTime日期类型\n * */\npublic class DateDescSerializer extends JsonDeserializer<LocalDateTime> {\n    @Override\n    public LocalDateTime deserialize(JsonParser jsonParser, DeserializationContext deserializationContext) throws IOException {\n        String dateStr = jsonParser.getText();\n        Instant instant = Instant.ofEpochMilli(Long.parseLong(dateStr));\n        ZoneId zone = ZoneId.systemDefault();\n        return LocalDateTime.ofInstant(instant, zone);\n    }\n}\n\n /**\n\t * 发货客服生效时间\n\t */\n\t@DiffField("发货客服生效时间")\n\t@JsonSerialize(using = DateSerializer.class)\n\t@JsonDeserialize(using = DateDescSerializer.class)\n\tprivate LocalDateTime sendServiceEffectTime;\n')])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br"),a("span",{staticClass:"line-number"},[n._v("14")]),a("br"),a("span",{staticClass:"line-number"},[n._v("15")]),a("br"),a("span",{staticClass:"line-number"},[n._v("16")]),a("br"),a("span",{staticClass:"line-number"},[n._v("17")]),a("br"),a("span",{staticClass:"line-number"},[n._v("18")]),a("br"),a("span",{staticClass:"line-number"},[n._v("19")]),a("br"),a("span",{staticClass:"line-number"},[n._v("20")]),a("br"),a("span",{staticClass:"line-number"},[n._v("21")]),a("br"),a("span",{staticClass:"line-number"},[n._v("22")]),a("br"),a("span",{staticClass:"line-number"},[n._v("23")]),a("br"),a("span",{staticClass:"line-number"},[n._v("24")]),a("br"),a("span",{staticClass:"line-number"},[n._v("25")]),a("br"),a("span",{staticClass:"line-number"},[n._v("26")]),a("br"),a("span",{staticClass:"line-number"},[n._v("27")]),a("br"),a("span",{staticClass:"line-number"},[n._v("28")]),a("br"),a("span",{staticClass:"line-number"},[n._v("29")]),a("br"),a("span",{staticClass:"line-number"},[n._v("30")]),a("br"),a("span",{staticClass:"line-number"},[n._v("31")]),a("br"),a("span",{staticClass:"line-number"},[n._v("32")]),a("br"),a("span",{staticClass:"line-number"},[n._v("33")]),a("br"),a("span",{staticClass:"line-number"},[n._v("34")]),a("br"),a("span",{staticClass:"line-number"},[n._v("35")]),a("br"),a("span",{staticClass:"line-number"},[n._v("36")]),a("br"),a("span",{staticClass:"line-number"},[n._v("37")]),a("br"),a("span",{staticClass:"line-number"},[n._v("38")]),a("br"),a("span",{staticClass:"line-number"},[n._v("39")]),a("br"),a("span",{staticClass:"line-number"},[n._v("40")]),a("br"),a("span",{staticClass:"line-number"},[n._v("41")]),a("br"),a("span",{staticClass:"line-number"},[n._v("42")]),a("br"),a("span",{staticClass:"line-number"},[n._v("43")]),a("br"),a("span",{staticClass:"line-number"},[n._v("44")]),a("br"),a("span",{staticClass:"line-number"},[n._v("45")]),a("br"),a("span",{staticClass:"line-number"},[n._v("46")]),a("br"),a("span",{staticClass:"line-number"},[n._v("47")]),a("br"),a("span",{staticClass:"line-number"},[n._v("48")]),a("br"),a("span",{staticClass:"line-number"},[n._v("49")]),a("br"),a("span",{staticClass:"line-number"},[n._v("50")]),a("br"),a("span",{staticClass:"line-number"},[n._v("51")]),a("br"),a("span",{staticClass:"line-number"},[n._v("52")]),a("br"),a("span",{staticClass:"line-number"},[n._v("53")]),a("br"),a("span",{staticClass:"line-number"},[n._v("54")]),a("br")])])])}),[],!1,null,null,null);s.default=t.exports}}]);