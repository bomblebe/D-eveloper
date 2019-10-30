const vm = new Vue({
	el: '#tagItems',
	data() {
		return {
			tags: [],
			show: false,
			myTag: ''
		}
	},
	methods: {
		addTag(e) {
			let text = e.target.innerText.trim()
			this.myTag = text
			if (!text.length || /^[ ]+$/.test(text)) {
					e.target.innerText = ''
					return
			}
			if (48 < e.keyCode && e.keyCode < 105 && !this.show) {
				this.showList()
			}
			if (e.keyCode === 32 || e.keyCode === 13) {
				this.checkTag(text)
				e.target.innerText = ''
				this.myTag = ''
				this.hideList()
			}
		},addExistingTag(someTag){
			this.tags.push(someTag)
		},
		selectTag(tag) {
			this.checkTag(tag)
			this.$refs.tagInput.innerText = ''
			this.myTag = ''
		},
		deleteTag(index) {
			this.tags.splice(index, 1)
		},
		showList() {
			this.show = true
		},
		hideList() {
			this.show = false
		},
		checkTag(tag) {
			if (!this.tags.includes(tag)) {
				this.tags.push(tag)
			}
		}
	},
	computed: {
		filterList() {
			let arr1 = this.list.filter(data => {
				return !this.tags.includes(data)
			})
			if (this.myTag) {
				arr1 = arr1.filter(data => 
					data.indexOf(this.myTag) !== -1
				)
			}
			return arr1
		},
		listPosition() {
			let left = 0
			let top = 0
			if (this.show) {
				left = this.$refs.tagInput.offsetLeft - 15 + 'px'
				top = this.$refs.tagInput.offsetTop + 22 + 'px'
			}
			return {'left': left, 'top': top}
		}
	}
})