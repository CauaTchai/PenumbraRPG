export default class PenumbraItemSheet extends ItemSheet{
    get template() {
        return 'systems/penumbrarpg/templates/sheets/${this.item.data.type}-sheet.html'
    }
}